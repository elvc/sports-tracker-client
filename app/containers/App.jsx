import React from 'react';
import Dashboard from './Dashboard';
import TopNav from '../components/navbar/TopNav';
import ChatBar from './ChatBar';
import SideBar from './Sidebar';

const App = (props) => (
  <div>
    <TopNav />
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <Dashboard />
        <ChatBar />
      </div>
    </div>
  </div>
);

export default App