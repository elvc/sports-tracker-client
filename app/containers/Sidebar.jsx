import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment';
import { fetchFeeds , requestFeeds} from '../actions/api'
import LeagueItem from '../components/sidebar/LeagueItem';

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

  componentDidMount(){
    const { dispatch } = this.props;
    const date = moment().format('YYYYMMDD');
    dispatch(fetchFeeds('nhl', date));
    dispatch(fetchFeeds('nba', date));
    dispatch(fetchFeeds('mlb', date));
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
      <nav className="col-sm-3 hidden-sm-down bg-faded sidebar">
        {
          this.props.leagues.map(league => (
            <LeagueItem key={ league.name }
              leagueClick={ this.leagueClick.bind(this, league.name) }
              league={ league.name }
              gameData={ league.data }
              isActive={ this.state.activeLeague === league.name }/>
          ))
        }
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    leagues: [{
      name: 'nhl',
      data: state.sidebar.gamesNHL,
    }, {
      name: 'nfl',
      data: state.sidebar.gamesNFL
    }, {
      name: 'nba',
      data: state.sidebar.gamesNBA
    }, {
      name: 'mlb',
      data: state.sidebar.gamesMLB
    }],
    receivedAt: state.sidebar.receivedAt
  }
};

export default connect(mapStateToProps)(Sidebar);