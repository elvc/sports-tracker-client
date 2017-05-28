import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LogoutButton extends Component {
  static propTypes = {
    handleLogoutSession: PropTypes.func.isRequired
  };

  handleLogout = () => {
    $.ajax({
      url: '/logout',
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
        <ul className="navbar-nav ml-auto text-right pb-2 pt-3">
          <span className="logged-in-as">Logged in as: { this.props.user }</span>
          <li onClick={ this.handleLogout } className="nav-item">
            <a className="navitem">Logout</a>
          </li>
        </ul>
    );
  }
}
