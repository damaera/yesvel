import React, { Component } from 'react';

import Tree from '../organisms/Tree'
import Tabs from '../organisms/Tabs'
import Editor from '../organisms/Editor'

class EditorPage extends Component {  
  render () {
    return (
      <div className="Editor">
        <Tree />
        <Tabs />
        <Editor />
      </div>
    );
  }
}

export default EditorPage
