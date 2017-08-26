import React, { Component } from 'react'
import { connect, actions } from 'mirrorx'

import styled from 'styled-components'

const TabsWrapper = styled.div`
  float: left;
`

class Tabs extends Component {

  render () {
    const { openedTabs } = this.props
    // console.log(openedTabs)
    return (
      <TabsWrapper>
        { Object.keys(openedTabs).map(id => {
          return (
            <button key={id}>
              { id } 
              <span onClick={ () => actions.tabs.closeTab({ uid: id}) }>x</span>
            </button>
          )
        })}
      </TabsWrapper>
    )
  }
}

export default connect(state => {
  return {
    userId: state.auth.uid,
    folderTree: state.folderTree.data,
    openedTabs: Object.assign({}, state.tabs.openedTabs)
  }
})(Tabs)