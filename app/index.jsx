import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import sportsApp from './reducers/index';
import App from './containers/App';

require('../styles/application.scss');

const initialState = {
  chat: {
    active: 0, // array index
    rooms: [
      {
        game: 'test', // unique id for room
        messages: [
          {
            user: 'somebody',
            content: 'steph is the best',
            id: 99
          },
          {
            user: 'somebody else',
            content: 'lebron though',
            id: 109
          }
        ],
        onlineUsers: 12,
        input: 'this is a gr'
      }
    ]
  }
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
  // user: {
  //   name: 'George'
  // }
};

const store = createStore(sportsApp, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
