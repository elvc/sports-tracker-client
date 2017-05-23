import { combineReducers } from 'redux';
import chat from './chat';
import user from './user';
import sidebar from './side_bar';
import cards from './cards';


const sportsApp = combineReducers({
  user,
  chat,
  sidebar,
  cards
});

export default sportsApp;
