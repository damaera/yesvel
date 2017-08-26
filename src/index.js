import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { render, Router } from 'mirrorx'

import './store/AuthModel'
import './store/FolderTreeModel'
import './store/TabModel'
import './store/EditorModel'

import registerServiceWorker from './registerServiceWorker';

render(
  <Router>
    <App />
  </Router>
, document.getElementById('root'));
registerServiceWorker();
