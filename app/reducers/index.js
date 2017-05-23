import { combineReducers } from 'redux';
import chat from './chat';
import user from './user';
import cards from './cards';

const sportsApp = combineReducers({
  user,
  chat,
  cards
});

export default sportsApp;
