import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LogoutButton extends Component {
  static propTypes = {
    handleLogoutSession: PropTypes.func.isRequired,
    notify: PropTypes.func.isRequired
  };

  handleLogout = () => {
    const HOST = location.origin.replace('8081', '8080');

    const logoutSuccess = {
      title: 'Logout Success',
      status: 'success',
      dismissible: true,
      dismissAfter: 3000
    }

    const logoutError = {
      title: 'Logout Error',
      message: 'Please try again',
      status: 'error',
      dismissible: true,
      dismissAfter: 3000
    }

    fetch(`${HOST}/logout`, {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
    .then((response) => {
      if (response.status !== 200) {
        console.error('Looks like there was a problem with logout. Status Code:', response.status);
        return response.json();
      }
      response.json().then(() => {
        this.props.handleLogoutSession();
        this.props.notify(logoutSuccess);
      });
    })
    .catch((response) => {
      logoutError.message = 'Unexpected error with logout. Please try again';
      this.props.notify(logoutError);
    })
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
