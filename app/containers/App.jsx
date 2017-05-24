import React from 'react';
import Dashboard from './Dashboard';
import TopNav from '../components/navbar/TopNav';
import Footer from '../components/navbar/Footer';
import SideBar from '../components/sidebar/SideBar';

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
