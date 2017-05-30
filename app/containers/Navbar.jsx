import React from 'react';
import { connect } from 'react-redux';
import { addNotification as notify } from 'reapop';
import TopNav from '../components/navbar/TopNav';
import { login, logout } from '../actions/user';

const Navbar = props => (
  <TopNav { ...props } />
);

const mapStateToProps = state => ({ username: state.user.name });

const mapDispatchToProps = {
  login,
  logout,
  notify
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
