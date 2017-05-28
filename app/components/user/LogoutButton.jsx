import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LogoutButton extends Component {
  static propTypes = {
    handleLogoutSession: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  handleLogout = () => {
    $.ajax({
      url: 'http://localhost:8080/logout',
      type: 'POST',
      xhrFields: { withCredentials: true },
      success: () => {
        this.props.handleLogoutSession();
        alert('Logout successful');
      },
      error: (err) => {
        console.error('Error', err);
      }
    });
  }

  render() {
    return (
        <ul className="navbar-nav ml-auto text-right pb-2 pt-2">
          <span className="logged-in-as">Logged in as: { this.props.user }</span>
          <li onClick={ this.handleLogout } className="nav-item">
            <a className="navitem">Logout</a>
          </li>
        </ul>
    );
  }
}
