import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import marked from "marked";

class Editor extends React.Component {
  render() {
    return (
      <form>
        <textarea
          id="editor"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </form>
    );
  }
}

class Preview extends React.Component {
  render() {
    const asd = marked(this.props.value);
    return (
      <div id="preview-container">
        <div id="preview" dangerouslySetInnerHTML={{ __html: asd }} />
      </div>
    );
  }
}

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "asd",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <Editor value={this.state.text} handleChange={this.handleChange} />
        <Preview value={this.state.text} />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<MarkdownPreviewer />, document.getElementById("root"));
