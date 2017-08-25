import React, { Component } from 'react';

import Tree from '../organisms/Tree'
import Tabs from '../organisms/Tabs'

class Editor extends Component {  
  render() {
    return (
      <div className="Editor">
        <Tree />
        <Tabs />
      </div>
    );
  }
}

export default Editor;
