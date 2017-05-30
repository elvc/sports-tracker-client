import React from 'react';
import NotificationsSystem from 'reapop';
import theme from 'reapop-theme-wybo';
import Dashboard from '../containers/Dashboard';
import Navbar from '../containers/Navbar';
import ChatBar from '../containers/ChatBar';
import SideBar from '../containers/Sidebar';
import ModalWrapper from '../containers/ModalWrapper';

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
    <ModalWrapper />
  </div>
);

export default App;
