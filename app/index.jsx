import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import sportsApp from './reducers/index';
import App from './components/App';

require('../styles/application.scss');

let store = createStore(sportsApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
