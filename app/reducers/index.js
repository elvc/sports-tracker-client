import { combineReducers } from 'redux';
import { reducer as notificationsReducer } from 'reapop';
import chat from './chat';
import user from './user';
import sidebar from './side_bar';
import cards from './cards';
import modal from './modal';

const sportsApp = combineReducers({
  user,
  chat,
  sidebar,
  cards,
  modal,
  notifications: notificationsReducer()
});

export default sportsApp;
