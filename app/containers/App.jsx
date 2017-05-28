import React from 'react';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import ChatBar from './ChatBar';
import SideBar from './Sidebar';

const App = () => (
  <div>
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
