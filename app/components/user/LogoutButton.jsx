import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LogoutButton extends Component {
  static propTypes = {
    handleLogoutSession: PropTypes.func.isRequired
  };

  handleLogout = () => {
    const HOST = location.origin.replace('8081', '8080');

    const logoutSuccess = {
      title: 'Logout Success',
      status: 'success',
      dismissible: true,
      dismissAfter: 2000
    }

    const logoutError = {
      title: 'Logout Error',
      message: 'Please try again',
      status: 'error',
      dismissible: true,
      dismissAfter: 2000
    }

    $.ajax({
      url: `${HOST}/logout`,
      type: 'POST',
      xhrFields: { withCredentials: true },
      success: () => {
        this.props.handleLogoutSession();
        this.props.notify(logoutSuccess);
      },
      error: () => {
        this.props.notify(logoutError);
      }
    });
  }

  render() {
    return (
        <ul className="navbar-nav ml-auto text-right pb-2 pt-2">
          <span className="logged-in-as mr-3">Logged in as: { this.props.user }</span>
          <li onClick={ this.handleLogout } className="nav-item">
            <a className="navitem">Logout</a>
          </li>
        </ul>
    );
  }
}
