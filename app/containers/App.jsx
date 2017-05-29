import React from 'react';
import NotificationsSystem from 'reapop';
import theme from 'reapop-theme-wybo';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import ChatBar from './ChatBar';
import SideBar from './Sidebar';

const App = () => (
  <div>
    <NotificationsSystem theme={ theme } />
    <Navbar />
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <Dashboard />
        <ChatBar />
      </div>
    </div>
  </div>
);

export default App;
