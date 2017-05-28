import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Game from './Game';

class LeagueItem extends Component {
  static propTypes = {
    gameData: PropTypes.array.isRequired,
    leagueClick: PropTypes.func.isRequired,
    league: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
  }

  constructor() {
    super();
  }

  render() {
    const { leagueClick, league, gameData, isActive } = this.props;
    const activeLeagueClass = `d-flex justify-content-center pl-0 nav-link ${isActive ? 'active' : ''}`;

    return (
      <ul className="nav nav-pills flex-column">
        <li className="nav-item" data-toggle="collapse" data-target={ `#${league}` }>
          <div onClick={ this.props.leagueClick } className={ activeLeagueClass }><img className="league-icon mr-2" src={ `/img/${league}.png` } alt={ league } /> { league.toUpperCase() } </div>
        </li>
        <ul className="sub-menu collapse pl-0" id={ league }>
          { gameData.map(game => <Game key={ game.id } league={ league } { ...game } />) }
          { gameData.length == 0 && <li className="d-flex justify-content-center pl-0">Sorry, no games today</li> }
        </ul>
      </ul>
    );
  }
}

export default LeagueItem;
