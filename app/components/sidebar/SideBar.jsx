import React, { Component } from 'react';
import NBA from './NBA';
import NFL from './NFL';
import NHL from './NHL';
import MLB from './MLB';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="nav-side-menu bg-inverse">
        <div className="brand">Sports</div>
        <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content" />
        <div className="menu-list">
          <ul id="menu-content" className="menu-content collapse out">
            <li><a href="#"><i className="fa fa-user fa-lg" /> Login</a></li>
            <li><a href="#"><i className="fa fa-users fa-lg" /> Register</a></li>
          </ul>
        </div>

        <ul>
          <li data-toggle="collapse" data-target="#nhl" className="collapsed">
            <a href=""><img src="/img/hockey.png" alt="nhl" /> NHL <span className="arrow" /></a>
          </li>
        </ul>
        <ul className="sub-menu collapse" id="nhl">

        </ul>

        <ul>
          <li data-toggle="collapse" data-target="#nfl" className="collapsed">
            <a href=""><img src="/img/sport_football.png" alt="nfl" /> NFL <span className="arrow" /></a>
          </li>
        </ul>
        <ul className="sub-menu collapse" id="nfl">

        </ul>

        <ul>
          <li data-toggle="collapse" data-target="#mlb" className="collapsed">
            <a href=""><img src="/img/baseball-icon.png" alt="mlb" /> MLB <span className="arrow" /></a>
          </li>
        </ul>
        <ul className="sub-menu collapse" id="mlb">

        </ul>

        <ul>
          <li data-toggle="collapse" data-target="#nba" className="collapsed">
            <a href=""><img src="/img/Basketball-48.png" alt="nba" /> NBA <span className="arrow" /></a>
          </li>
        </ul>
        <ul className="sub-menu collapse" id="nba">

        </ul>
      </div>
    );
  }
}
