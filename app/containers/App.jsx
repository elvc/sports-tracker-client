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

const App = () => (
  <div>
    <TopNav />
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <Dashboard />
      </div>
    </div>
  </div>
);

export default App;
