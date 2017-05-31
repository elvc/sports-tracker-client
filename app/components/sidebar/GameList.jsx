import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeagueItem from './LeagueItem';
import api from '../../lib/api';

class GameList extends Component {
  constructor(props) {
    super(props);
    // to identify league that has been clicked
    this.state = { activeLeague: '' };
  }

  componentDidMount() {
    const HOST = location.origin.replace('8081', '8080');
    const { receiveMLB, receiveNBA, receiveNHL, receiveNFL, notify } = this.props;
    const errorNotification = {
      title: 'Problem with fetching feeds',
      message: 'Please wait a few minutes and try again',
      status: 'error',
      dismissible: true,
      dismissAfter: 2000
    };

    api.get(`${HOST}/leagues/NHL`).then((response) => {
      receiveNHL(response.response);
    }).catch(() => {
      notify(errorNotification);
    });
    api.get(`${HOST}/leagues/NBA`).then((response) => {
      receiveNBA(response.response);
    }).catch(() => {
      notify(errorNotification);
    });
    api.get(`${HOST}/leagues/NFL`).then((response) => {
      receiveNFL(response.response);
    }).catch(() => {
      notify(errorNotification);
    });
    api.get(`${HOST}/leagues/MLB`).then((response) => {
      receiveMLB(response.response);
    }).catch(() => {
      notify(errorNotification);
    });

    const pathArray = window.location.pathname.split('/');
    const gameId = parseInt(pathArray[1], 10);
    if (pathArray[0] === 'game' && !Number.isNaN(gameId)) {
      this.addCard(pathArray[1]);
    }

    $('.navbar-toggler-left').on('click', () => {
      $('body').toggleClass('noScroll');
    });
  }

  // TODO refactor to only take gameId as argument
  addCard = (gameProps) => {
    const { receiveCard } = gameProps;
    const HOST = location.origin.replace('8081', '8080');
    const game = {
      gameId: gameProps.gameId,
      league: gameProps.league,
      homeTeam: gameProps.homeTeam.Abbreviation,
      awayTeam: gameProps.awayTeam.Abbreviation,
      location: gameProps.homeTeam.City,
      time: gameProps.time,
      date: gameProps.date
    };
    const errorNotification = {
      title: 'Problem fetching game data',
      message: 'Please wait a few minutes and try again',
      status: 'error',
      dismissible: true,
      dismissAfter: 2000
    };
    api.post(`${HOST}/leagues/${gameProps.league}/games/${gameProps.gameId}`, game).then((response) => {
      receiveCard(response.response);
    }).catch(() => {
      this.props.notify(errorNotification);
    });
    $('.sidebar').removeClass('show');
  };

  // handle toggle highlight of league
  leagueClick(league) {
    if (league === this.state.activeLeague) {
      league = '';
    }
    this.setState(Object.assign({}, this.state, { activeLeague: league }));
  }

  render() {
    return (
      <nav className="col-sm-3 bg-faded navbar-collapse collapse sidebar pt-0" id="collapseLeagueItem">
        <h5 className="d-flex justify-content-center mb-0 league-game-heading">Leagues & Games</h5>
        <div className="nav-item league-heading">
          {
            this.props.leagues.map(league => (
              <LeagueItem
                key={ league.name }
                leagueClick={ this.leagueClick.bind(this, league.name) }
                league={ league.name }
                gameData={ league.data }
                isActive={ this.state.activeLeague === league.name }
                addCard={ this.addCard }
              />
            ))
          }
        </div>
      </nav>
    );
  }
}

GameList.propTypes = {
  leagues: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  receiveMLB: PropTypes.func.isRequired,
  receiveNBA: PropTypes.func.isRequired,
  receiveNHL: PropTypes.func.isRequired,
  receiveNFL: PropTypes.func.isRequired,
  receiveCard: PropTypes.func.isRequired,
  notify: PropTypes.func.isRequired
};

export default GameList;
