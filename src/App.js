import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { marked } from "marked";
import initialText from "./initial-text.js";

function App() {
  return (
    <div className="App">
      <MarkdownPreviewer />
    </div>
  );
}

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: initialText,
    };
  }

  updatePreviewer(markdown) {
    this.setState({ markdown });
  }

  render() {
    return (
      <>
        <div className="container d-flex text-left align-items-center justify-content-center mt-3">
          <div className="row">
            <div className="border border-dark mt-1 border-bottom-0 bg-title">
              <h3 className="title m-1">
                <i className="fa-solid fa-pen"></i> Editor
              </h3>
            </div>
            <textarea
              className="mb-5 bg-text"
              rows="10"
              cols="80"
              id="editor"
              value={this.state.markdown}
              onChange={(e) => {
                this.updatePreviewer(e.target.value);
              }}
            >
              {this.state.default}
            </textarea>
          </div>
        </div>
        <Preview markdown={this.state.markdown} />
      </>
    );
  }
}

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div id="preview-container" className="container">
          <div className="row">
            <div className="border border-dark mt-1 border-bottom-0 bg-title">
              <h3 className="title m-1">
                <i className="fa-solid fa-eye"></i> Previewer
              </h3>
            </div>
            <div
              id="preview"
              className="text-left border border-dark bg-text"
              dangerouslySetInnerHTML={{
                __html: marked(this.props.markdown),
              }}
            ></div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
