import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchFeeds , requestFeeds} from '../../actions/api'
import moment from 'moment';
import Game from './Game';

class Sidebar extends Component {

  static propTypes = {
    gamesNHL: PropTypes.array.isRequired,
    gamesNFL: PropTypes.array.isRequired,
    gamesMLB: PropTypes.array.isRequired,
    gamesNBA: PropTypes.array.isRequired,
    receivedAt: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const {dispatch} = this.props;
    const date = moment().format('YYYYMMDD');
    dispatch(fetchFeeds('nhl', date));
    dispatch(fetchFeeds('nba', date));
    dispatch(fetchFeeds('nfl', date));
    dispatch(fetchFeeds('mlb', date));
  }

  render() {
    return (
      <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item" data-toggle="collapse" data-target="#nhl">
            <a className="nav-link" href=""><img className="league-icon mr-3" src="/img/nhl.png" alt="nhl" /> NHL <span className="arrow" /></a>
          </li>
          <ul className="sub-menu collapse" id="nhl">
            { this.props.gamesNHL.map(game => <Game key={ game.id } {...game}/> ) }
            { this.props.gamesNHL.length == 0 && <li>Sorry, no games today</li> }
          </ul>
        </ul>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item" data-toggle="collapse" data-target="#nfl">
            <a className="nav-link" href=""><img className="league-icon mr-3" src="/img/nfl.png" alt="nfl" /> NFL <span className="arrow" /></a>
          </li>
          <ul className="sub-menu collapse" id="nfl">
            { this.props.gamesNFL.map(game => <Game key={ game.id } {...game}/> ) }
            { this.props.gamesNFL.length == 0 && <li>Sorry, no games today</li> }
          </ul>
        </ul>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item" data-toggle="collapse" data-target="#nba">
            <a className="nav-link" href=""><img className="league-icon mr-3" src="/img/nba.png" alt="nba" /> NBA <span className="arrow" /></a>
          </li>
          <ul className="sub-menu collapse" id="nba">
            { this.props.gamesNBA.map(game => <Game key={ game.id } {...game}/> ) }
            { this.props.gamesNBA.length == 0 && <li>Sorry, no games today</li> }
          </ul>
        </ul>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item" data-toggle="collapse" data-target="#mlb">
            <a className="nav-link" href=""><img className="league-icon mr-3" src="/img/mlb.png" alt="mlb" /> MLB <span className="arrow" /></a>
          </li>
          <ul className="sub-menu collapse" id="mlb">
            { this.props.gamesMLB.map(game => <Game key={ game.id } {...game}/> ) }
            { this.props.gamesMLB.length == 0 && <li>Sorry, no games today</li> }
          </ul>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    gamesNHL: state.sidebar.gamesNHL,
    gamesNFL: state.sidebar.gamesNFL,
    gamesMLB: state.sidebar.gamesMLB,
    gamesNBA: state.sidebar.gamesNBA,
    receivedAt: state.sidebar.receivedAt
  }
}

export default connect(mapStateToProps)(Sidebar);
