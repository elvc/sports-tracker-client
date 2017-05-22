import { combineReducers } from 'redux';
import chat from './chat';
import user from './user';

const sportsApp = combineReducers({
  user,
  chat
});

export default sportsApp;
