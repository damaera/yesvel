import React, { Component } from 'react';

import { Route, connect, actions } from 'mirrorx'

import Home from './pages/Home'
import Editor from './pages/Editor'

class App extends Component {
  componentDidMount() {
    actions.auth.checkAuthChange()
  }

  render () {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/editor" component={Editor}/>
      </div>
    );
  }
}

export default connect(state => {
  return {
    auth: state.auth
  }
})(App)
