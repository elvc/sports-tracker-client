import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LogoutButton extends Component {
  static propTypes = {
    handleLogoutSession: PropTypes.func.isRequired
  };

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
      <ul onClick={ this.handleLogout } className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="navitem">Logout</a>
        </li>
      </ul>
    );
  }
}
