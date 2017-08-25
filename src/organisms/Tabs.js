import React, { Component } from 'react'
import { connect, actions } from 'mirrorx'

import styled from 'styled-components'

import ReactQuill from 'react-quill'
import theme from 'react-quill/dist/quill.snow.css'

const TabsWrapper = styled.div`
  float: left;
`

class Tabs extends Component {
  state = {
    text: ''
  }
  handleChange = (value) => {
    this.setState({ text: value })
  }
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
        <div>
          <ReactQuill
            value={this.state.text}
            onChange={this.handleChange} />
        </div>
      </TabsWrapper>
    )
  }
}

export default connect(state => {
  return {
    folderTree: state.folderTree.data,
    openedTabs: Object.assign({}, state.tabs.openedTabs)
  }
})(Tabs)