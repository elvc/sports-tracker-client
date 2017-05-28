import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receiveMLB, receiveNBA, receiveNHL, receiveNFL } from '../actions/api';
import LeagueItem from '../components/sidebar/LeagueItem';
import api from '../lib/api';

class Sidebar extends Component {

  static propTypes = {
    receivedAt: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    // to identify league that has been clicked
    this.state = { activeLeague: '' };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    api.get(`http://localhost:8080/leagues/nhl`).then(response => {
      dispatch(receiveNHL(response.response));
    });
    api.get(`http://localhost:8080/leagues/nba`).then(response => {
      dispatch(receiveNBA(response.response));
    });
    api.get(`http://localhost:8080/leagues/nfl`).then(response => {
      dispatch(receiveNFL(response.response));
    });
    api.get(`http://localhost:8080/leagues/mlb`).then(response => {
      dispatch(receiveMLB(response.response));
    });
  }

  // handle toggle highlight of league
  leagueClick(league) {
    if (league === this.state.activeLeague) {
      league = '';
    }
    this.setState(Object.assign({}, this.state, { activeLeague: league }));
  }

  render() {
    return (
      <nav className="col-sm-3 bg-faded navbar-collapse collapse sidebar" id="collapseLeagueItem">
        <h5 className="d-flex justify-content-center mb-4">Leagues & Games</h5>
        <div className="nav-item">
          {
            this.props.leagues.map(league => (
              <LeagueItem
                key={ league.name }
                leagueClick={ this.leagueClick.bind(this, league.name) }
                league={ league.name }
                gameData={ league.data }
                isActive={ this.state.activeLeague === league.name }
              />
            ))
          }
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  leagues: [{
    name: 'NHL',
    data: state.sidebar.gamesNHL
  }, {
    name: 'NFL',
    data: state.sidebar.gamesNFL
  }, {
    name: 'NBA',
    data: state.sidebar.gamesNBA
  }, {
    name: 'MLB',
    data: state.sidebar.gamesMLB
  }],
  receivedAt: state.sidebar.receivedAt
});

export default connect(mapStateToProps)(Sidebar);
