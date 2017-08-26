import React, { Component } from 'react';

import { Route, connect, actions } from 'mirrorx'

import HomePage from './pages/HomePage'
import EditorPage from './pages/EditorPage'

class App extends Component {
  componentDidMount() {
    actions.auth.checkAuthChange()
  }

  render () {
    return (
      <div className="App">
        <Route exact path="/" component={HomePage}/>
        <Route path="/editor" component={EditorPage}/>
      </div>
    );
  }
}

export default connect(state => {
  return {
    auth: state.auth
  }
})(App)
