import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import sportsApp from './reducers/index';
import App from './containers/App';

require('../styles/application.scss');

const initialState = {
  chat: {
    active: 0,
    rooms: []
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
      timeRemaining: 70,
      displayPlayByPlay: false,
      plays: [
        { id: 1, content: 'Steph scores a 3' },
        { id: 2, content: 'Steph scores a 3' },
        { id: 3, content: 'Steph scores a FG' },
        { id: 4, content: 'Someone else scores?' }
      ]
    },
    {
      gameId: 2,
      league: 'nhl',
      homeTeam: 'Senators',
      awayTeam: 'Penguins',
      homeScore: 10,
      awayScore: 3,
      quarter: 4,
      timeRemaining: 50,
      displayPlayByPlay: false,
      plays: []
    },
    {
      gameId: 3,
      league: 'MLB',
      homeTeam: 'Giants',
      awayTeam: 'Yankees',
      homeScore: 9,
      awayScore: 5,
      quarter: 4,
      timeRemaining: 30,
      displayPlayByPlay: false,
      plays: []
    },
    {
      gameId: 4,
      league: 'NBA',
      homeTeam: 'Lakers',
      awayTeam: 'Kings',
      homeScore: 35,
      awayScore: 25,
      quarter: 2,
      timeRemaining: 36,
      displayPlayByPlay: false,
      plays: []
    },
    {
      gameId: 5,
      league: 'MLB',
      homeTeam: 'Rays',
      awayTeam: 'Reds',
      homeScore: 3,
      awayScore: 4,
      quarter: 2,
      timeRemaining: 100,
      displayPlayByPlay: false,
      plays: []
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
  },
  sidebar: {
    gamesNHL: [],
    gamesNFL: [],
    gamesMLB: [],
    gamesNBA: [],
    receivedAt: Date.now()
  }
};

const store = createStore(
  sportsApp,
  initialState,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
