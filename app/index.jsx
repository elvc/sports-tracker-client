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
      league: 'MLB',
      homeTeam: 'PIT',
      awayTeam: 'TOR',
      homeScore: 5,
      awayScore: 6,
      displayPlayByPlay: false,
      scoreLoading: false,
      currentInning: '4',
      currentInningHalf: 'top',
      innings: [
        {
          inning: 1,
          awayScore: 2,
          homeScore: 0
        },
        {
          inning: 2,
          awayScore: 1,
          homeScore: 0
        },
        {
          inning: 3,
          awayScore: 2,
          homeScore: 1
        },
        {
          inning: 4,
          awayScore: 0,
          homeScore: 5
        },
        {
          inning: 5,
          awayScore: 0,
          homeScore: 5
        },
        {
          inning: 6,
          awayScore: 0,
          homeScore: 5
        },
        {
          inning: 7,
          awayScore: 0,
          homeScore: 5
        },
        {
          inning: 8,
          awayScore: 0,
          homeScore: 5
        },
        {
          inning: 9,
          awayScore: 0,
          homeScore: 5
        },
        {
          inning: 10,
          awayScore: 0,
          homeScore: 5
        },
        {
          inning: 11,
          awayScore: 0,
          homeScore: 5
        },
        {
          inning: 12,
          awayScore: 0,
          homeScore: 5
        }
      ],
      plays: [
        { id: 1, content: 'Batter singled', sport: 'MLB' },
        { id: 2, content: 'Batter singled', sport: 'MLB' },
        { id: 3, content: 'Batter singled', sport: 'MLB' },
        { id: 4, content: 'Batter doubled', sport: 'MLB' },
        { id: 5, content: 'Batter singled', sport: 'MLB' },
        { id: 6, content: 'Batter singled', sport: 'MLB' },
        { id: 7, content: 'Batter singled', sport: 'MLB' },
        { id: 8, content: 'Batter grounded out', sport: 'MLB' },
        { id: 9, content: 'Batter singled', sport: 'MLB' },
        { id: 10, content: 'Batter singled', sport: 'MLB' },
        { id: 11, content: 'Batter sacrifice flied. Other batter scored.', sport: 'MLB', style: 'scored' },
        { id: 12, content: 'Batter singled', sport: 'MLB' },
        { id: 13, content: 'Batter singled', sport: 'MLB' },
        { id: 14, content: 'Batter singled', sport: 'MLB' },
        { id: 15, content: 'Batter singled', sport: 'MLB' },
        { id: 16, content: 'Batter singled', sport: 'MLB' }
      ],
      gameStarted: true,
      gameCompleted: false
    },
    {
      gameId: 3,
      league: 'NHL',
      homeTeam: 'CGY',
      awayTeam: 'VAN',
      homeScore: 9,
      awayScore: 5,
      period: '3',
      timeRemaining: '1:07',
      periods: [
        {
          period: '1',
          awayScore: 3,
          homeScore: 2
        },
        {
          period: '2',
          awayScore: 4,
          homeScore: 1
        },
        {
          period: '1',
          awayScore: 2,
          homeScore: 2
        }
      ],
      scoreLoading: false,
      displayPlayByPlay: false,
      gameStarted: true,
      plays: []
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
      league: 'MLB',
      homeTeam: 'PIT',
      awayTeam: 'TOR',
      homeScore: 5,
      awayScore: 6,
      displayPlayByPlay: false,
      scoreLoading: false,
      currentInning: '4',
      currentInningHalf: 'top',
      innings: [
        {
          inning: 1,
          awayScore: 2,
          homeScore: 0
        },
        {
          inning: 2,
          awayScore: 1,
          homeScore: 0
        },
        {
          inning: 3,
          awayScore: 2,
          homeScore: 1
        }
      ],
      plays: [
        { id: 1, content: 'Batter singled', sport: 'MLB' },
        { id: 2, content: 'Batter singled', sport: 'MLB' },
        { id: 3, content: 'Batter singled', sport: 'MLB' },
        { id: 4, content: 'Batter doubled', sport: 'MLB' },
        { id: 5, content: 'Batter singled', sport: 'MLB' },
        { id: 6, content: 'Batter singled', sport: 'MLB' },
        { id: 7, content: 'Batter singled', sport: 'MLB' },
        { id: 8, content: 'Batter grounded out', sport: 'MLB' },
        { id: 9, content: 'Batter singled', sport: 'MLB' },
        { id: 10, content: 'Batter singled', sport: 'MLB' },
        { id: 11, content: 'Batter sacrifice flied. Other batter scored.', sport: 'MLB', style: 'scored' },
        { id: 12, content: 'Batter singled', sport: 'MLB' },
        { id: 13, content: 'Batter singled', sport: 'MLB' },
        { id: 14, content: 'Batter singled', sport: 'MLB' },
        { id: 15, content: 'Batter singled', sport: 'MLB' },
        { id: 16, content: 'Batter singled', sport: 'MLB' }
      ],
      gameStarted: true,
      gameCompleted: false
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
