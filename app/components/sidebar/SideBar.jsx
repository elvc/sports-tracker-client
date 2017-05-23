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
            <a href=""><img className="league-icon" src="/img/nhl.png" alt="nhl" /> NHL <span className="arrow" /></a>
          </li>
        </ul>
        <ul className="sub-menu collapse" id="nhl">
          { this.props.gamesNHL.map(game => <Game key={ game.id } {...game}/> ) }
          { this.props.gamesNHL.length == 0 && <li>Sorry, no games today</li> }
        </ul>
        <ul>
          <li data-toggle="collapse" data-target="#nfl" className="collapsed">
            <a href=""><img className="league-icon" src="/img/nfl.png" alt="nfl" /> NFL <span className="arrow" /></a>
          </li>
        </ul>
        <ul className="sub-menu collapse" id="nfl">
          { this.props.gamesNFL.map(game => <Game key={ game.id } {...game}/> ) }
          { this.props.gamesNFL.length == 0 && <li>Sorry, no games today</li> }
        </ul>

        <ul>
          <li data-toggle="collapse" data-target="#mlb" className="collapsed">
            <a href=""><img className="league-icon" src="/img/mlb.png" alt="mlb" /> MLB <span className="arrow" /></a>
          </li>
        </ul>
        <ul className="sub-menu collapse" id="mlb">
          { this.props.gamesMLB.map(game => <Game key={ game.id } {...game}/> ) }
          { this.props.gamesMLB.length == 0 && <li>Sorry, no games today</li> }
        </ul>

        <ul>
          <li data-toggle="collapse" data-target="#nba" className="collapsed">
            <a href=""><img className="league-icon" src="/img/nba.png" alt="nba" /> NBA <span className="arrow" /></a>
          </li>
        </ul>
        <ul className="sub-menu collapse" id="nba">
          { this.props.gamesNBA.map(game => <Game key={ game.id } {...game}/> ) }
          { this.props.gamesNBA.length == 0 && <li>Sorry, no games today</li> }
        </ul>
      </div>
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
