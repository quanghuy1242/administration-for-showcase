import React from 'react';
import { Stack, IconButton } from 'office-ui-fabric-react';
import { getStyle } from './MonacoEditor.style';

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

  action = {
    bold: () => {
      const contribution = this.editor.getContribution("snippetController2");
      let pattern = /^__(.*)__$/;
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
            endColumn: this.editor.getSelection().endColumn + 2,
            endLineNumber: this.editor.getPosition().lineNumber,
            positionColumn: this.editor.getSelection().endColumn + 2,
            positionLineNumber: this.editor.getPosition().lineNumber,
            selectionStartColumn: this.editor.getSelection().startColumn - 2,
            selectionStartLineNumber: this.editor.getPosition().lineNumber,
            startColumn: this.editor.getSelection().startColumn - 2,
            startLineNumber: this.editor.getPosition().lineNumber,
          });
          if(pattern.test(a)) {
            this.editor.setSelection(
              new window.monaco.Range(
                this.editor.getPosition().lineNumber,
                this.editor.getSelection().startColumn - 2,
                this.editor.getPosition().lineNumber,
                this.editor.getSelection().endColumn + 2
              )
            );
            contribution.insert(`\${0:${pattern.exec(a)[1]}}`);
            return;
          }
        }
        contribution.insert(`__\${0:${selectedText}}__`);
      } catch (error) {
        let a = this.editor.getModel().getValueInRange({
          endColumn: this.editor.getSelection().endColumn + 2,
          endLineNumber: this.editor.getPosition().lineNumber,
          positionColumn: this.editor.getSelection().endColumn + 2,
          positionLineNumber: this.editor.getPosition().lineNumber,
          selectionStartColumn: this.editor.getSelection().startColumn - 2,
          selectionStartLineNumber: this.editor.getPosition().lineNumber,
          startColumn: this.editor.getSelection().startColumn - 2,
          startLineNumber: this.editor.getPosition().lineNumber,
        });
        if(pattern.test(a)) {
          this.editor.setSelection(
            new window.monaco.Range(
              this.editor.getPosition().lineNumber,
              this.editor.getSelection().startColumn - 2,
              this.editor.getPosition().lineNumber,
              this.editor.getSelection().endColumn + 2
            )
          );
          contribution.insert(`\${0:${pattern.exec(a)[1]}}`);
          return;
        }
        contribution.insert(`__\${0}__`);
        console.log(error);
      } finally {
        this.editor.focus();
      }
    },
    italic: () => {
      const contribution = this.editor.getContribution("snippetController2");
      let pattern = /^_(.*)_$/;
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
            endColumn: this.editor.getSelection().endColumn + 1,
            endLineNumber: this.editor.getPosition().lineNumber,
            positionColumn: this.editor.getSelection().endColumn + 1,
            positionLineNumber: this.editor.getPosition().lineNumber,
            selectionStartColumn: this.editor.getSelection().startColumn - 1,
            selectionStartLineNumber: this.editor.getPosition().lineNumber,
            startColumn: this.editor.getSelection().startColumn - 1,
            startLineNumber: this.editor.getPosition().lineNumber,
          });
          if(pattern.test(a)) {
            this.editor.setSelection(
              new window.monaco.Range(
                this.editor.getPosition().lineNumber,
                this.editor.getSelection().startColumn - 1,
                this.editor.getPosition().lineNumber,
                this.editor.getSelection().endColumn + 1
              )
            );
            contribution.insert(`\${0:${pattern.exec(a)[1]}}`);
            return;
          }
        }
        contribution.insert(`_\${0:${selectedText}}_`);
      } catch (error) {
        let a = this.editor.getModel().getValueInRange({
          endColumn: this.editor.getSelection().endColumn + 1,
          endLineNumber: this.editor.getPosition().lineNumber,
          positionColumn: this.editor.getSelection().endColumn + 1,
          positionLineNumber: this.editor.getPosition().lineNumber,
          selectionStartColumn: this.editor.getSelection().startColumn - 1,
          selectionStartLineNumber: this.editor.getPosition().lineNumber,
          startColumn: this.editor.getSelection().startColumn - 1,
          startLineNumber: this.editor.getPosition().lineNumber,
        });
        if(pattern.test(a)) {
          this.editor.setSelection(
            new window.monaco.Range(
              this.editor.getPosition().lineNumber,
              this.editor.getSelection().startColumn - 1,
              this.editor.getPosition().lineNumber,
              this.editor.getSelection().endColumn + 1
            )
          );
          contribution.insert(`\${0:${pattern.exec(a)[1]}}`);
          return;
        }
        contribution.insert(`_\${0}_`);
        console.log(error);
      } finally {
        this.editor.focus();
      }
    }
  }

  render() {
    const { className, style, width } = this.props;
    const classNames = getStyle();
    return (
      <Stack>
        <Stack horizontal className={classNames.toolbar}>
          <IconButton
            iconProps={{ iconName: "Save" }}
          />
          <IconButton
            iconProps={{ iconName: "Bold" }}
            onClick={this.action.bold}
          />
          <IconButton
            iconProps={{ iconName: "Italic" }}
            onClick={this.action.italic}
          />
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