import React from 'react';
import { Stack, IconButton, TooltipHost, Text } from 'office-ui-fabric-react';
import { getStyle } from './MonacoEditor.style';
import { CommunicationColors } from '@uifabric/fluent-theme';

export class MonacoEditor extends React.Component {
  static defaultProps = {
    language: "markdown",
    theme: "vs",
    didLoad: () => {},
    didMount: () => {}
  };

  componentDidMount() {
    this.handleLoad();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.value !== nextProps.value) {
      this.editor.setValue(nextProps.value);
    }
    return true;
  }

  containerDidMount = ref => {
    this.ref = ref;
  };

  handleLoad() {
    if (!window.require) {
      const loaderScript = window.document.createElement("script");
      loaderScript.type = "text/javascript";
      loaderScript.src = "https://unpkg.com/monaco-editor/min/vs/loader.js";
      loaderScript.addEventListener("load", this.didLoad);
      window.document.body.appendChild(loaderScript);
    } else {
      this.didLoad();
    }
  }

  handleMount() {
    const { language, theme } = this.props;
    this.editor = window.monaco.editor.create(this.ref, {
      value: this.props.value,
      wordWrap: 'on',
      language,
      theme
    });
    this.didMount(this.editor);
    return this.editor;
  }

  didMount = editor => {
    const { didMount } = this.props;

    editor.focus();

    editor.onDidChangeModelContent((event) => {
      // const value = editor.getValue();
    });

    didMount(editor);
  };

  didLoad = e => {
    const { didLoad } = this.props;
    window.require.config({
      paths: { vs: "https://unpkg.com/monaco-editor/min/vs" }
    });
    window.require(["vs/editor/editor.main"], () => {
      this.handleMount();
    });
    didLoad();
    if (e) {
      e.target.removeEventListener("load", this.didLoad);
    }
  };

  selectedText(type) {
    let selectedText = type !== 1
      ? this.editor.getModel().getValueInRange(this.editor.getSelection())
      : null;
    if (!selectedText) {
      selectedText = type !== 1
        ? this.editor.getModel().getWordAtPosition(this.editor.getPosition())
        : this.editor.getModel().getLineContent(this.editor.getPosition().lineNumber);
      this.editor.setSelection(
        new window.monaco.Range(
          this.editor.getPosition().lineNumber,
          type === 1 ? 1 : selectedText.startColumn,
          this.editor.getPosition().lineNumber,
          type === 1 ? selectedText.length + 1 : selectedText.endColumn
        )
      );
      selectedText = this.editor.getModel().getValueInRange(this.editor.getSelection());
    }
    return selectedText;
  }

  /**
   * @param type `{ null: getValueAtPosition, 1: getLine }`
   */
  actionWrapper = (pattern, charactersLeft, charactersRight, charactersLength = null, type = null) => {
    const contribution = this.editor.getContribution("snippetController2");
    const charactersLengthCs = {
      left: charactersLength ? charactersLength: charactersLeft.length,
      right: charactersLength ? charactersLength: charactersRight.length
    }
    try {
      let selectedText = this.selectedText(type);
      if(pattern.test(selectedText)) {
        this.editor.setSelection(
          new window.monaco.Range(
            this.editor.getPosition().lineNumber,
            this.editor.getSelection().startColumn,
            this.editor.getPosition().lineNumber,
            this.editor.getSelection().endColumn
          )
        );
        contribution.insert(`\${0:${pattern.exec(selectedText)[1]}}`);
        return;
      } else {
        let a = this.editor.getModel().getValueInRange({
          endColumn: this.editor.getSelection().endColumn + charactersLengthCs.right,
          endLineNumber: this.editor.getPosition().lineNumber,
          positionColumn: this.editor.getSelection().endColumn + charactersLengthCs.right,
          positionLineNumber: this.editor.getPosition().lineNumber,
          selectionStartColumn: this.editor.getSelection().startColumn - charactersLengthCs.left,
          selectionStartLineNumber: this.editor.getPosition().lineNumber,
          startColumn: this.editor.getSelection().startColumn - charactersLengthCs.left,
          startLineNumber: this.editor.getPosition().lineNumber,
        });
        console.log(a);
        if(pattern.test(a)) {
          this.editor.setSelection(
            new window.monaco.Range(
              this.editor.getPosition().lineNumber,
              this.editor.getSelection().startColumn - charactersLengthCs.left,
              this.editor.getPosition().lineNumber,
              this.editor.getSelection().endColumn + charactersLengthCs.right
            )
          );
          contribution.insert(`\${0:${pattern.exec(a)[1]}}`);
          return;
        }
      }
      contribution.insert(`${charactersLeft}\${0:${selectedText}}${charactersRight}`);
    } catch (error) {
      let a = this.editor.getModel().getValueInRange({
        endColumn: this.editor.getSelection().endColumn + charactersLengthCs.right,
        endLineNumber: this.editor.getPosition().lineNumber,
        positionColumn: this.editor.getSelection().endColumn + charactersLengthCs.right,
        positionLineNumber: this.editor.getPosition().lineNumber,
        selectionStartColumn: this.editor.getSelection().startColumn - charactersLengthCs.left,
        selectionStartLineNumber: this.editor.getPosition().lineNumber,
        startColumn: this.editor.getSelection().startColumn - charactersLengthCs.left,
        startLineNumber: this.editor.getPosition().lineNumber,
      });
      if(pattern.test(a)) {
        this.editor.setSelection(
          new window.monaco.Range(
            this.editor.getPosition().lineNumber,
            this.editor.getSelection().startColumn - charactersLength,
            this.editor.getPosition().lineNumber,
            this.editor.getSelection().endColumn + charactersLength
          )
        );
        contribution.insert(`\${0:${pattern.exec(a)[1]}}`);
        return;
      }
      contribution.insert(`${charactersLeft}\${0}${charactersRight}`);
      console.log(error);
    } finally {
      this.editor.focus();
    }
  }

  preHeader = () => {
    const pattern = /^(#|##|###|####)\s(.*)$/;
    const contribution = this.editor.getContribution("snippetController2");
    const line = this.selectedText(1);
    if (pattern.test(line)) {
      this.editor.setSelection(
        new window.monaco.Range(
          this.editor.getPosition().lineNumber,
          this.editor.getSelection().startColumn,
          this.editor.getPosition().lineNumber,
          line.length + 1
        )
      );
      contribution.insert(`\${0:${pattern.exec(line)[2]}}`);
    }
  }

  action = {
    bold: () => this.actionWrapper(/^\*\*(.*)\*\*$/, '**', '**'),
    italic: () => this.actionWrapper(/^_(.*)_$/, '_', '_'),
    strikethrough: () => this.actionWrapper(/^~~(.*)~~$/, '~~', '~~'),
    codeInline: () => this.actionWrapper(/^`(.*)`$/, '`', '`'),
    // eslint-disable-next-line no-template-curly-in-string
    codeBlock: () => this.actionWrapper(/^\n```\n(.*)\n```\n$/, '\n```${1:language}\n', '\n```\n', 5, 1),
    header1: () => {
      this.preHeader();
      this.actionWrapper(/^#\s(.*)$/, '# ', '', null, 1);
    },
    header2: () => {
      this.preHeader();
      this.actionWrapper(/^##\s(.*)$/, '## ', '', null, 1)
    },
    header3: () => {
      this.preHeader();
      this.actionWrapper(/^###\s(.*)$/, '### ', '', null, 1)
    },
    header4: () => {
      this.preHeader();
      this.actionWrapper(/^####\s(.*)$/, '#### ', '', null, 1)
    },
    blockquotes: () => this.actionWrapper(/^>\s(.*)$/, '> ', '', null, 1),
    bulletedList: () => this.actionWrapper(/^\*\s(.*)$/, '* ', '', null, 1),
    numberedList: () => this.actionWrapper(/^1\.\s(.*)$/, '1. ', '', null, 1),
    taskList: () => this.actionWrapper(/^-\s\[\s\]\s(.*)$/, '- [ ] ', '', null, 1),
    // eslint-disable-next-line no-template-curly-in-string
    link: () => this.actionWrapper(/^-\s\[\s\]\s(.*)$/, '[', '](${1:https://google.com})'),
    // eslint-disable-next-line no-template-curly-in-string
    image: () => this.actionWrapper(/^-\s\[\s\]\s(.*)$/, '![${2:Alt Text}](${1:https://google.com/logo.png} "', '")'),
  }

  render() {
    const { className, style, width } = this.props;
    const classNames = getStyle();
    return (
      <Stack>
        <Stack horizontal className={classNames.toolbar}>
          <Stack.Item grow disableShrink>
            <TooltipHost content="Markdown Editor">
              <IconButton
                iconProps={{ iconName: 'MarkDownLanguage' }}
                styles={{
                  icon: {
                    color: CommunicationColors.primary + ' !important',
                    fontWeight: 'bolder'
                  }
                }}
              />
            </TooltipHost>
            <TooltipHost content="Header">
              <IconButton
                iconProps={{ iconName: 'EditStyle' }}
                onRenderMenuIcon={() => false}
                menuProps={{
                  shouldFocusOnMount: true,
                  items: [
                    {
                      iconProps: { iconName: 'Header1' },
                      text: 'Header 1',
                      key: '1',
                      onClick: this.action.header1
                    },
                    {
                      iconProps: { iconName: 'Header2' },
                      text: 'Header 2',
                      key: '2',
                      onClick: this.action.header2
                    },
                    {
                      iconProps: { iconName: 'Header3' },
                      text: 'Header 3',
                      key: '3',
                      onClick: this.action.header3
                    },
                    {
                      iconProps: { iconName: 'Header4' },
                      text: 'Header 4',
                      key: '4',
                      onClick: this.action.header4
                    }
                  ]
                }}
              />
            </TooltipHost>
            <TooltipHost content="Bold">
              <IconButton
                iconProps={{ iconName: 'Bold' }}
                onClick={this.action.bold}
              />
            </TooltipHost>
            <TooltipHost content="Italic">
              <IconButton
                iconProps={{ iconName: 'Italic' }}
                onClick={this.action.italic}
              />
            </TooltipHost>
            <TooltipHost content="Strikethrough">
              <IconButton
                iconProps={{ iconName: 'Strikethrough' }}
                onClick={this.action.strikethrough}
              />
            </TooltipHost>
            <TooltipHost content="Blockquotes">
              <IconButton
                iconProps={{ iconName: 'RightDoubleQuote' }}
                onClick={this.action.blockquotes}
              />
            </TooltipHost>
            <TooltipHost content="Bulleted List">
              <IconButton
                iconProps={{ iconName: 'BulletedList' }}
                onClick={this.action.bulletedList}
              />
            </TooltipHost>
            <TooltipHost content="Numbered List">
              <IconButton
                iconProps={{ iconName: 'NumberedList' }}
                onClick={this.action.numberedList}
              />
            </TooltipHost>
            <TooltipHost content="Task List">
              <IconButton
                iconProps={{ iconName: 'CheckList' }}
                onClick={this.action.taskList}
              />
            </TooltipHost>
            <TooltipHost content="Table">
              <IconButton
                iconProps={{ iconName: 'Table' }}
                onRenderMenuIcon={() => false}
                menuProps={{
                  onRenderMenuList: (menuListProps, defaultRender) => (
                    <Stack>
                      <Text className={classNames.headerTable} block>{`8x8 table`}</Text>
                      <table className={classNames.tableWrapper}>
                        <tbody>
                          {[...Array(10)].map((row, rowIndex) => (
                            <tr key={`row-${rowIndex}`}>
                              {[...Array(10)].map((column, columnIndex) => (
                                <td
                                  key={`column-${columnIndex}`}
                                >
                                  <div className={classNames.tableItem}></div>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {defaultRender(menuListProps)}
                    </Stack>
                  ),
                  shouldFocusOnMount: true,
                  items: [
                    {
                      iconProps: { iconName: 'Table' },
                      text: 'Manual',
                      key: '1'
                    }
                  ]
                }}
              />
            </TooltipHost>
            <TooltipHost content="Code">
              <IconButton
                iconProps={{ iconName: 'CodeEdit' }}
                onRenderMenuIcon={() => false}
                menuProps={{
                  shouldFocusOnMount: true,
                  items: [
                    {
                      iconProps: { iconName: 'CalculatorSubtract' },
                      text: 'Inline',
                      key: '1',
                      onClick: this.action.codeInline
                    },
                    {
                      iconProps: { iconName: 'CollapseMenu' },
                      text: 'Block',
                      key: '2',
                      onClick: this.action.codeBlock
                    }
                  ]
                }}
              />
            </TooltipHost>
            <TooltipHost content="Link">
              <IconButton
                iconProps={{ iconName: 'Link' }}
                onClick={this.action.link}
              />
            </TooltipHost>
            <TooltipHost content="Image">
              <IconButton
                iconProps={{ iconName: 'Photo2' }}
                onClick={this.action.image}
              />
            </TooltipHost>
            <TooltipHost content="Video">
              <IconButton
                iconProps={{ iconName: 'Video' }}
              />
            </TooltipHost>
            <TooltipHost content="Formulas">
              <IconButton
                iconProps={{ iconName: 'Variable' }}
              />
            </TooltipHost>
            <TooltipHost content="Table of Content">
              <IconButton
                iconProps={{ iconName: 'CustomList' }}
              />
            </TooltipHost>
          </Stack.Item>
          <Stack.Item>
            <TooltipHost content="Documentation">
              <IconButton
                iconProps={{ iconName: 'TextDocument' }}
              />
            </TooltipHost>
            <TooltipHost content="Save">
              <IconButton iconProps={{ iconName: 'Save' }} />
            </TooltipHost>
          </Stack.Item>
        </Stack>
        <div
          ref={this.containerDidMount}
          className={className}
          style={{
            height: this.props.height,
            width,
            ...style
          }}
        />
      </Stack>
    );
  }
}