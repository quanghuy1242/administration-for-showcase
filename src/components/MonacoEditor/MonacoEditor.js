import React from 'react';

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
    const editor = window.monaco.editor.create(this.ref, {
      value: this.props.value,
      language,
      theme
    });
    this.didMount(editor);
    return editor;
  }

  didMount = editor => {
    const { didMount } = this.props;

    editor.onDidChangeModelContent((event) => {
      const value = editor.getValue();
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

  render() {
    const { className, style, width, height } = this.props;
    return (
      <div
        ref={this.containerDidMount}
        className={className}
        style={{
          height: this.props.height,
          width,
          ...style
        }}
      />
    );
  }
}