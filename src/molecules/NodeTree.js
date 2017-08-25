import React, { Component } from 'react';

import { connect, actions } from 'mirrorx'
// import { styled } from 'styled-components'

import NodeTreeWrapper from '../atoms/NodeTreeWrapper'
import NodeTreeIcon from '../atoms/NodeTreeIcon'

class NodeTree extends Component {
  render () {
    const { uid, type, title, children, collapsed } = this.props

    if (type === 'folder') {
      return (
        <NodeTreeWrapper
          collapsed={collapsed}
        >
          <div onClick={ e => {
            e.stopPropagation()
            actions.folderTree.collapseFolder({ uid })
          }}>
            { collapsed
              ? <NodeTreeIcon icon="ion-arrow-down-b" color="#E6D385" fontSize=".9em" />
              : <NodeTreeIcon icon="ion-arrow-right-b" color="#E6D385" fontSize=".9em" />
             }
            <span>{ title }</span>
          </div>
          <div>{ children }</div>
        </NodeTreeWrapper>
      )
    } else {
      return (
        <NodeTreeWrapper>
          <div
            onClick={() => actions.tabs.openTab({ uid, name: title })}
          >
            <NodeTreeIcon icon="ion-document" color="#E6D385" fontSize=".9em" />
            <span>{ title }</span>
          </div>
        </NodeTreeWrapper>
      )
    }
  }
}

export default connect(state => {
  return {
    selectedFile: state.folderTree.selectedFile
  }
})(NodeTree)