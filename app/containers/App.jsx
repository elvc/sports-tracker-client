import React from 'react';
import Header from './Header';
import GameSelector from './GameSelector';
import Dashboard from './Dashboard';
import ChatBar from './ChatBar';
import TopNav from '../components/navbar/TopNav';
import Footer from '../components/navbar/Footer';
import SideBar from '../components/sidebar/SideBar';
import CardBox from '../components/cards/CardBox';
import state from '../../state_structure';
import RegForm from '../components/RegForm';

const App = () => (
  <div>
    <TopNav />
    <SideBar />
    <div className="container" id="main">
      <div className="row">
        <CardBox allCards={ state.cards } />
        <ChatBar />
      </div>
      <RegForm />
    </div>

    {/* <Header />
    <GameSelector />
    <Dashboard />*/}
    <Footer />
  </div>
);

export default App;
