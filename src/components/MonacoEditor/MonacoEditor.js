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

  selectedText() {
    let selectedText = this.editor.getModel().getValueInRange(this.editor.getSelection());
    if (!selectedText) {
      selectedText = this.editor.getModel().getWordAtPosition(this.editor.getPosition());
      this.editor.setSelection(
        new window.monaco.Range(
          this.editor.getPosition().lineNumber,
          selectedText.startColumn,
          this.editor.getPosition().lineNumber,
          selectedText.endColumn
        )
      );
      selectedText = this.editor.getModel().getValueInRange(this.editor.getSelection());
    }
    return selectedText;
  }

  actionWrapper = (pattern, characters) => {
    const contribution = this.editor.getContribution("snippetController2");
    const charactersLength = characters.length;
    try {
      let selectedText = this.selectedText();
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
          endColumn: this.editor.getSelection().endColumn + charactersLength,
          endLineNumber: this.editor.getPosition().lineNumber,
          positionColumn: this.editor.getSelection().endColumn + charactersLength,
          positionLineNumber: this.editor.getPosition().lineNumber,
          selectionStartColumn: this.editor.getSelection().startColumn - charactersLength,
          selectionStartLineNumber: this.editor.getPosition().lineNumber,
          startColumn: this.editor.getSelection().startColumn - charactersLength,
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
      }
      contribution.insert(`${characters}\${0:${selectedText}}${characters}`);
    } catch (error) {
      let a = this.editor.getModel().getValueInRange({
        endColumn: this.editor.getSelection().endColumn + charactersLength,
        endLineNumber: this.editor.getPosition().lineNumber,
        positionColumn: this.editor.getSelection().endColumn + charactersLength,
        positionLineNumber: this.editor.getPosition().lineNumber,
        selectionStartColumn: this.editor.getSelection().startColumn - charactersLength,
        selectionStartLineNumber: this.editor.getPosition().lineNumber,
        startColumn: this.editor.getSelection().startColumn - charactersLength,
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
      contribution.insert(`${characters}\${0}${characters}`);
      console.log(error);
    } finally {
      this.editor.focus();
    }
  }

  action = {
    bold: () => this.actionWrapper(/^\*\*(.*)\*\*$/, '**'),
    italic: () => this.actionWrapper(/^_(.*)_$/, '_'),
    strikethrough: () => this.actionWrapper(/^~~(.*)~~$/, '~~'),
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
                      key: '1'
                    },
                    {
                      iconProps: { iconName: 'Header2' },
                      text: 'Header 2',
                      key: '2'
                    },
                    {
                      iconProps: { iconName: 'Header3' },
                      text: 'Header 3',
                      key: '3'
                    },
                    {
                      iconProps: { iconName: 'Header4' },
                      text: 'Header 4',
                      key: '4'
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
              />
            </TooltipHost>
            <TooltipHost content="Bulleted List">
              <IconButton
                iconProps={{ iconName: 'BulletedList' }}
                onClick={this.action.strikethrough}
              />
            </TooltipHost>
            <TooltipHost content="Numbered List">
              <IconButton
                iconProps={{ iconName: 'NumberedList' }}
                onClick={this.action.strikethrough}
              />
            </TooltipHost>
            <TooltipHost content="Task List">
              <IconButton
                iconProps={{ iconName: 'CheckList' }}
                onClick={this.action.strikethrough}
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
                      key: '1'
                    },
                    {
                      iconProps: { iconName: 'CollapseMenu' },
                      text: 'Block',
                      key: '2'
                    }
                  ]
                }}
              />
            </TooltipHost>
            <TooltipHost content="Link">
              <IconButton
                iconProps={{ iconName: 'Link' }}
              />
            </TooltipHost>
            <TooltipHost content="Image">
              <IconButton
                iconProps={{ iconName: 'Photo2' }}
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