import React from 'react';
import { connect } from 'react-redux';
import TopNav from '../components/navbar/TopNav';
import { login, logout } from '../actions/user';

const Navbar = props => (
  <TopNav { ...props } />
);

const mapStateToProps = state => ({ username: state.user.name });

const mapDispatchToProps = {
  login,
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
