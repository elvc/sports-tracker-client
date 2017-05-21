import React from 'react';
import Header from './Header';
import GameSelector from './GameSelector';
import Dashboard from './Dashboard';
import ChatBar from './ChatBar';
import CardBox from '../components/CardBox';
import state from '../../state_structure.js';

const App = () => (
  <div>
    <CardBox allCards={ state.cards } />

    {/* <Header />
    <GameSelector />
    <Dashboard />*/}
    <ChatBar />
  </div>
);

export default App;
