import React from 'react';
import * as marked from 'marked';

const Preview = (props) => {
  return (
    <div className="col mark-preview">
      <div className="label">Preview</div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.markdown)}} />
    </div>
  );
}

export default Preview;