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

  action = {
    bold: () => {
      const selectedText = this.editor.getModel().getValueInRange(this.editor.getSelection());
      let contribution = this.editor.getContribution("snippetController2");
      contribution.insert(`**\${0:${selectedText}}**`);
      this.editor.focus();
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