import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import marked from "marked";
import { text } from "./text.json";

class Editor extends React.Component {
  render() {
    return (
      <div style={{flex:"1.5"}} className="window-container">
        <h3 className="window-title">Editor</h3>
        <form>
          <textarea
            id="editor"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
        </form>
      </div>
    );
  }
}

class Preview extends React.Component {
  render() {
    return (
      <div style={{flex:"2"}} className="window-container">
        <h3 className="window-title">Preview</h3>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: this.props.value }}
        />
      </div>
    );
  }
}

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: text,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    const marked = require("marked");
    marked.setOptions({
      breaks: true,
    });
    return (
      <div id="app-container">
        <h1 id="title">Markdown Previewer</h1>
        <div id="flex-container">
          <Editor value={this.state.text} handleChange={this.handleChange} />
          <Preview value={marked(this.state.text)} />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<MarkdownPreviewer />, document.getElementById("root"));
