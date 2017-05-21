import React from 'react';
import Header from './Header';
import GameSelector from './GameSelector';
import Dashboard from './Dashboard';
import ChatBar from './ChatBar';
import TopNav from '../components/navbar/TopNav';
import Footer from '../components/navbar/Footer';
import CardBox from '../components/cards/CardBox';
import state from '../../state_structure.js';

const App = () => (
  <div>
    <TopNav />

    <div className="container" id="main">
      <div className="row">
        <CardBox allCards={ state.cards } />
      </div>
    </div>

    {/* <Header />
    <GameSelector />
    <Dashboard />*/}
    <ChatBar />
    <Footer />
  </div>
);

export default App;
