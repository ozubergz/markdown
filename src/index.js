import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Editor from './components/editor';
import Preview from './components/preview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: placeholder
    }
  }

  handleChange(markdown) {
    this.setState({markdown});
  }

  render() {
    return (
      <div className="container">
      <div className="header">
          <h1>Markdown Previewer</h1>
      </div>
      <hr/>
      <div className="row">
        <Editor 
          markdown={this.state.markdown}
          onChange={event => this.handleChange(event.target.value)}/>
        <Preview
          markdown={this.state.markdown}/>
      </div>
      </div>
    );
  }
}

const placeholder = 
`# hello, This is Markdown Live Preview

----
## what is Markdown?
see [Wikipedia](http://en.wikipedia.org/wiki/Markdown)

> Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)".

----
## usage
1. Write markdown text in this textarea.
2. Click 'HTML Preview' button.

----
## markdown quick reference
# headers

*emphasis*

**strong**

* list

>block quote

    code (4 spaces indent)
[links](http://wikipedia.org)

----
## changelog
* 17-Feb-2013 re-design

----
## thanks
* [markdown-js](https://github.com/evilstreak/markdown-js)`

ReactDOM.render(<App />, document.getElementById('root'));