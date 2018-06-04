import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import ConnectedApp from './App';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={ store }>
    <ConnectedApp />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
