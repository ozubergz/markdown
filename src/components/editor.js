import React from 'react';

const Editor = (props) => {
  return(
    <div className="col mark-editor">
      <div className="label">Editor</div>
      <textarea
        id="editor"
        value={props.markdown}
        onChange={props.onChange}
        type="text">  
      </textarea>
    </div>
  );
}

export default Editor;