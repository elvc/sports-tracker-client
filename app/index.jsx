import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import sportsApp from './reducers/index';
import App from './containers/App';

require('../styles/application.scss');

const initialState = {
  chat: {
    active: 17, // room id unless you hate yourself
    rooms: [
      {
        name: 'one',
        id: 17,
        messages: [],
        onlineUsers: 0,
        input: ''
      },
      {
        name: 'two',
        id: 172,
        messages: [],
        onlineUsers: 0,
        input: ''
      },
      {
        name: 'three',
        id: 27,
        messages: [],
        onlineUsers: 0,
        input: ''
      }
    ]
  },
  // cards: [
  //   {
  //     league: 'nba',
  //     homeTeam: 'SAS',
  //     awayTeam: 'GSW',
  //     homeScore: 150,
  //     awayScore: 85,
  //     quarter: 4,
  //     timeRemaining: 70,
  //     display: 'BASIC' // 'STATS', 'PLAY_BY_PLAY' other options
  //   },
  //   {
  //     league: 'nhl',
  //     homeTeam: '?',
  //     awayTeam: '?',
  //     homeScore: 3,
  //     awayScore: 1
  //   }
  // ],
  // gameSelector: {
  //   visible: [
  //     'NBA', 'MLB', 'MLB_TODAY'
  //   ],
  //   games: [
  //     // all game data here
  //   ]
  // },
  user: {
    name: 'George'
  }
};

const store = createStore(sportsApp, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
