import React, { Component } from 'react'

import firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

import firebase from '../firebase'

class Home extends Component {
  componentDidMount() {
    const uiConfig = {
      signInSuccessUrl: '/editor',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      // Terms of service url.
      tosUrl: ''
    };

    // Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
  }
  
  render () {
    return (
      <div>
        <div id="firebaseui-auth-container"></div>
      </div>
    )
  }
}

export default Home