import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <nav>
        <ul className="nav navbar-inverse fixed-bottom bg-inverse justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="https://www.facebook.com/"><i className="fa fa-facebook fa-lg"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.instagram.com/"><i className="fa fa-instagram fa-lg"></i></a>
          </li>
        </ul>
      </nav>
    );
  }
}
