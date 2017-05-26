import React, { Component } from 'react';

export default class LogoutButton extends Component {
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
      <ul onClick={this.handleLogout} className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="navitem">Logout</a>
        </li>
      </ul>
    );
  }
}
