import { combineReducers } from 'redux';
import chat from './chat';
import user from './user';
import { combineForms } from 'react-redux-form';

const initialUser = { name: '' };

const sportsApp = combineReducers({
  user,
  chat
});

export default sportsApp;
