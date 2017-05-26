import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import io from 'socket.io-client';
import createSocketIoMiddleware from 'redux-socket.io';
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
      league: 'NBA',
      homeTeam: 'SAS',
      awayTeam: 'GSW',
      homeScore: 91,
      awayScore: 120,
      quarter: '4',
      timeRemaining: '10:09',
      displayPlayByPlay: true,
      scoreLoading: false,
      plays: [
        { id: 1, content: 'Steph scores a 3', sport: 'NBA', time: '10:11' },
        { id: 2, content: 'Steph scores a 3', sport: 'NBA', time: '10:34' },
        { id: 3, content: 'Steph scores a FG', sport: 'NBA', time: '11:18' },
        { id: 4, content: 'Someone else scores?', sport: 'NBA', time: '0:11' }
      ],
      gameStarted: true
    },
    {
      gameId: 2,
      league: 'NBA',
      homeTeam: 'GSW',
      awayTeam: 'PHI',
      homeScore: 10,
      awayScore: 3,
      period: '3',
      timeRemaining: '8:30',
      displayPlayByPlay: false,
      scoreLoading: false,
      plays: [],
      gameStarted: false
    },
    {
      gameId: 3,
      league: 'NBA',
      homeTeam: 'GSW',
      awayTeam: 'GSW',
      homeScore: 9,
      awayScore: 5,
      innings: '4',
      inningsHalf: 'top',
      scoreLoading: true,
      displayPlayByPlay: false,
      gameStarted: true,
      plays: [
        { id: 1, content: 'Batter singled', sport: 'mlb' },
        { id: 2, content: 'Batter singled', sport: 'mlb' },
        { id: 3, content: 'Batter singled', sport: 'mlb' },
        { id: 4, content: 'Batter doubled', sport: 'mlb' },
        { id: 5, content: 'Batter singled', sport: 'mlb' },
        { id: 6, content: 'Batter singled', sport: 'mlb' },
        { id: 7, content: 'Batter singled', sport: 'mlb' },
        { id: 8, content: 'Batter grounded out', sport: 'mlb' },
        { id: 9, content: 'Batter singled', sport: 'mlb' },
        { id: 10, content: 'Batter singled', sport: 'mlb' },
        { id: 11, content: 'Batter sacrifice flied. Other batter scored.', sport: 'mlb', style: 'scored' },
        { id: 12, content: 'Batter singled', sport: 'mlb' },
        { id: 13, content: 'Batter singled', sport: 'mlb' },
        { id: 14, content: 'Batter singled', sport: 'mlb' },
        { id: 15, content: 'Batter singled', sport: 'mlb' },
        { id: 16, content: 'Batter singled', sport: 'mlb' }
      ]
    },
    {
      gameId: 44,
      league: 'NBA',
      homeTeam: 'LAL',
      awayTeam: 'SAC',
      homeScore: 35,
      awayScore: 25,
      quarter: '2',
      timeRemaining: 36,
      scoreLoading: false,
      displayPlayByPlay: false,
      plays: [],
      gameStarted: true
    },
    {
      gameId: 34,
      league: 'NBA',
      homeTeam: 'LAL',
      awayTeam: 'SAC',
      homeScore: 35,
      awayScore: 25,
      quarter: '2',
      timeRemaining: 36,
      scoreLoading: false,
      displayPlayByPlay: false,
      plays: [],
      gameStarted: true
    },
    {
      gameId: 24,
      league: 'NBA',
      homeTeam: 'LAL',
      awayTeam: 'SAC',
      homeScore: 35,
      awayScore: 25,
      quarter: '2',
      timeRemaining: 36,
      scoreLoading: false,
      displayPlayByPlay: false,
      plays: [],
      gameStarted: true
    },
    {
      gameId: 14,
      league: 'NBA',
      homeTeam: 'LAL',
      awayTeam: 'SAC',
      homeScore: 35,
      awayScore: 25,
      quarter: '2',
      timeRemaining: 36,
      scoreLoading: false,
      displayPlayByPlay: false,
      plays: [],
      gameStarted: true
    },
    {
      gameId: 5,
      league: 'NBA',
      homeTeam: 'MIA',
      awayTeam: 'GSW',
      homeScore: 3,
      awayScore: 4,
      quarter: '2',
      timeRemaining: 100,
      scoreLoading: false,
      displayPlayByPlay: false,
      plays: [],
      gameStarted: true
    }
  ],
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
const SOCKET_HOST = location.origin.replace(/^http/, 'ws').replace('8081', '8080');

const socket = io(SOCKET_HOST);
const socketIoMiddleware = createSocketIoMiddleware(socket, 'socket/');

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const middlewares = [
  thunk,
  socketIoMiddleware
];

const store = createStore(
  sportsApp,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares),
  ));

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
