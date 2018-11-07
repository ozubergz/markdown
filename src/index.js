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
`# Hello, This is Markdown Live Preview
----
## What is Markdown?
see [Wikipedia](http://en.wikipedia.org/wiki/Markdown)

> Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)".

----
# Headers
# This is an \`<h1>\` tag
## This is an \`<h2>\` tag
###### This is an \`<h6>\` tag
----
# Emphasis
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

----
# Lists

### Unordered Lists
* Item 1
* Item 2
  * Item 2a
  * Item 2b

### Ordered Lists
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

----
# Images
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)

----
# Links
http://github.com - automatic!
[GitHub](http://github.com)

----
# Blockquotes
> This is a block quote

----
# Inline Html
I think you should use an
\`<addr>\` element here instead.

----
# Code
\`\`\`
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
\`\`\`

----
# Table
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
`;

ReactDOM.render(<App />, document.getElementById('root'));