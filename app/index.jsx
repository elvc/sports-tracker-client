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
        game: 'test', // unique id for room
        name: 2,
        id: 17,
        messages: [
          {
            user: 'somebody',
            content: 'steph is the best',
            id: '99'
          },
          {
            user: 'somebody else',
            content: 'lebron though',
            id: '109'
          }
        ],
        onlineUsers: 12,
        input: ''
      },
      {
        game: 'tefdsfdsfst', // unique id for room
        name: 1,
        id: 172,
        messages: [
          {
            user: 'somebody',
            content: 'steph is the best',
            id: '99'
          },
          {
            user: 'somebody else',
            content: 'lebron though',
            id: '109'
          }
        ],
        onlineUsers: 12,
        input: ''
      },
      {
        game: 'not test', // unique id for room
        name: 3,
        id: 27,
        messages: [
          {
            user: 'person',
            content: 'MJ!',
            id: '99'
          },
          {
            user: 'person2',
            content: 'yup.',
            id: '109'
          }
        ],
        onlineUsers: 12,
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
