import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchFeeds , requestFeeds} from '../../actions/api'
import moment from 'moment';
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
    const activeLeagueClass = `nav-link ${isActive ? 'active' : ''}`;

    return (
      <ul className="nav nav-pills flex-column">
        <li className="nav-item" data-toggle="collapse" data-target={ `#${league}` }>
          <div onClick={ this.props.leagueClick } className={ activeLeagueClass }><img className="league-icon mr-3" src={`/img/${league}.png`} alt={ league } /> { league.toUpperCase() } </div>
        </li>
        <ul className="sub-menu collapse" id={league}>
          { gameData.map(game => <Game key={ game.id } { ...game }/> ) }
          { gameData.length == 0 && <li>Sorry, no games today</li> }
        </ul>
      </ul>
    )
  }
}

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
    dispatch(fetchFeeds('nfl', date));
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
      <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
        {
          this.props.leagues.map(league => (
            <LeagueItem key={ league.name } leagueClick={ this.leagueClick.bind(this, league.name) } league={ league.name } gameData={ league.data } isActive={ this.state.activeLeague === league.name }/>
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
}

export default connect(mapStateToProps)(Sidebar);
