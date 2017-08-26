import React, { Component } from 'react'
import { connect, actions } from 'mirrorx'

import styled from 'styled-components'

import ReactQuill from 'react-quill'
import theme from 'react-quill/dist/quill.snow.css'


const EditorWrapper = styled.div`
  float: left;
`

class Editor extends Component {

  state = {
    text: '',
    content: null
  }

  componentDidMount () {
    // window.hljs()
    console.log(window.hljs)
    actions.editor.getFileInit()
  }

  componentWillReceiveProps (nextProps) {
    // if (nextProps)
    if (this.props.deltas.length !== nextProps.deltas.length) {
      nextProps.deltas.map((delta) => {
        this._updateContent(delta)
      })
    }
  }
  

  modules = {
    formula: true,
    syntax: true,
    toolbar: [
      [{ header: [1, 2, false] }],
      [{ align: [] }, 'direction' ],
      [ 'bold', 'italic', 'underline', 'strike' ],
      // [{ color: [] }, { background: [] }],
      [{ script: 'super' }, { script: 'sub' }],
      [ 'blockquote', 'code-block' ],
      [{ list: 'ordered' }, { list: 'bullet'}, { indent: '-1' }, { indent: '+1' }],
      [ 'link', 'image', 'video' ],
      [ 'formula' ],
      [ 'clean' ]
    ],
  }

  formats = [
    'font', 'size',
    'header',
    'align', 'direction',
    'bold', 'italic', 'underline', 'strike',
    'script',
    'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'formula',
  ]

  handleChange = (content, delta, source, editor) => {

    if (source === 'user') {
      actions.editor.pushDeltaToFirebase(delta)
    }

    this.setState({ content })
  }

  _updateContent = (delta) => {
    const editor = this.refs.editor.getEditor()
    editor.updateContents(delta)
  }

  _test = (e) => {
    this._updateContent()
    // this.setState({
    //   deltas: [
    //     { insert: '23123' },
    //     { retain: 3 },
    //     { insert: '23123' }
    //   ]
    // })
  }

  render () {
    // console.log(this.state.deltas)
    return (
      <EditorWrapper>
        <button onClick={this._test}>Add text</button>

        <ReactQuill
          ref='editor'
          theme="snow"
          readOnly={this.props.hasBeenInitialized}
          value={this.state.content}
          placeholder="Write something"
          modules={this.modules}
          formats={this.formats}
          onChange={this.handleChange} />

      </EditorWrapper>
    )
  }
}

export default connect(state => {
  return {
    deltas: state.editor.deltas,
    hasBeenInitialized: state.editor.hasBeenInitialized
  }
})(Editor)