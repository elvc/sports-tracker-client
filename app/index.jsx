import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import sportsApp from './reducers/index';
import App from './containers/App';

require('../styles/application.scss');

const initialState = {
  chat: {
    active: 17,
    rooms: [
      {
        name: 'one',
        id: 17,
        messages: [],
        onlineUsers: 0,
        input: '',
        unread: false
      },
      {
        name: 'two',
        id: 172,
        messages: [],
        onlineUsers: 0,
        input: '',
        unread: false
      },
      {
        name: 'three',
        id: 27,
        messages: [],
        onlineUsers: 0,
        input: '',
        unread: false
      }
    ]
  },
  cards: [
    {
      gameId: 1,
      league: 'nba',
      display: 'BASIC', // 'STATS', 'PLAY_BY_PLAY' other options
      homeTeam: 'SAS',
      awayTeam: 'GSW',
      homeScore: 150,
      awayScore: 85,
      quarter: 4,
      timeRemaining: 70
    },
    {
      gameId: 2,
      league: 'nhl',
      homeTeam: 'Senators',
      awayTeam: 'Penguins',
      homeScore: 10,
      awayScore: 3,
      quarter: 4,
      timeRemaining: 50
    },
    {
      gameId: 3,
      league: 'MLB',
      homeTeam: 'Giants',
      awayTeam: 'Yankees',
      homeScore: 9,
      awayScore: 5,
      quarter: 4,
      timeRemaining: 30
    },
    {
      gameId: 4,
      league: 'NBA',
      homeTeam: 'Lakers',
      awayTeam: 'Kings',
      homeScore: 35,
      awayScore: 25,
      quarter: 2,
      timeRemaining: 36
    },
    {
      gameId: 5,
      league: 'MLB',
      homeTeam: 'Rays',
      awayTeam: 'Reds',
      homeScore: 3,
      awayScore: 4,
      quarter: 2,
      timeRemaining: 100
    }
  ],
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
