import React, { Component } from 'react';

export default class TopNav extends Component {
  render() {
    return (
      <nav>
        <ul className="nav navbar-inverse bg-inverse fixed-top justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="#">Sports</a>
          </li>
          <li className="nav-item ml-auto">
            <a className="nav-link" href="#">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Register</a>
          </li>
        </ul>
      </nav>
    );
  }
}
