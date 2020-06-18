import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Editor extends React.Component {
  render() {
    return <textarea id="editor"></textarea>;
  }
}

class Preview extends React.Component {
  render() {
    return <div id="preview"></div>;
  }
}

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "asd",
    };
  }

  render() {
    return (
      <div>
        <Editor />
        <Preview />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<MarkdownPreviewer />, document.getElementById("root"));
