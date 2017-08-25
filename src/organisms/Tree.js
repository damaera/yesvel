import React, { Component } from 'react';
import styled from 'styled-components'
import { connect, actions } from 'mirrorx'

import NodeTree from '../molecules/NodeTree'

const TreeWrapper = styled.div`
  background: #2A2D38;
  color: #D1D6EE;
  height: 100vh;
  font-size: 13px;
  overflow: auto;
  width: 200px;
  float: left;
`

class Tree extends Component {
  // componentDidMount() {
  //   actions.folderTree.getFolderUser()
  // }

  _renderTree = (parent, uid) => {
    if (!parent) {
      return
    }
    const children = parent.child

    if (children != null) {
      return <NodeTree
        title={parent.name}
        type="folder"
        uid={uid}
        key={uid}
        collapsed={parent.collapsed}>{
        Object.keys(children)
          .map((id) => {
            const child = children[id]
            return this._renderTree(child, id)
          })
          .sort((a, b) => {
            // ignore upper and lowercase
            const nameA = a.props.title.toUpperCase()
            const nameB = b.props.title.toUpperCase()

            const typeA = a.props.type
            const typeB = b.props.type

            if (typeA === typeB) {
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              // names must be equal
              return 0;
            } else {
              if (typeA > typeB) {
                return -1;
              }
              if (typeA < typeB) {
                return 1;
              }
              return 0;
            }

          })
      }
      </NodeTree>
    } else {
      return <NodeTree title={parent.name} type="file" uid={uid} key={uid} />
    }
  }

  render() {
    return (
      <TreeWrapper>
        <div>{ this.props.auth.displayName }</div>
        <div>
          { this._renderTree(this.props.folderTree.data, 0) }
        </div>
      </TreeWrapper>
    );
  }
}

export default connect(state => {
  return {
    folderTree: state.folderTree,
    auth: state.auth,
  }
})(Tree)