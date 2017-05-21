import React from 'react';
import Header from '../containers/Header';
import GameSelector from '../containers/GameSelector';
import Dashboard from '../containers/Dashboard';
import ChatBar from '../containers/ChatBar';
import CardBox from './CardBox';
import state from '../../state_structure.js';

const App = () => (
  <div>
    {
      <CardBox allCards={ state.cards } />

    /* <Header />
    <GameSelector />
    <Dashboard />
    <ChatBar />*/}
  </div>
);

export default App;
