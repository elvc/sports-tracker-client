import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receiveCard } from '../../actions/card';
import api from '../../lib/api';

const Game = (props) => {
  const HOST = location.origin.replace('8081', '8080');

  const add = (props) => {
    const { dispatch } = props;
    const game = {
      gameId: props.gameId,
      league: props.league,
      homeTeam: props.homeTeam.Abbreviation,
      awayTeam: props.awayTeam.Abbreviation,
      location: props.homeTeam.City,
      time: props.time,
      date: props.date
    };
    api.post(`${HOST}/leagues/${props.league}/games/${props.gameId}`, game).then((response) => {
      dispatch(receiveCard(response.response));
    });
  };

  return (
    <div className="game-container">
      <a onClick={ () => add(props) } role="button">
        <li className="d-flex justify-content-center game pt-2 pb-2">
          {props.awayTeam.Abbreviation} @ {props.homeTeam.Abbreviation} ({props.time})
        </li>
      </a>
    </div>
  );
};

Game.propTypes = {
  league: PropTypes.string.isRequired,
  gameId: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  awayTeam: PropTypes.object.isRequired,
  homeTeam: PropTypes.object.isRequired,
  time: PropTypes.string.isRequired
};

export default connect()(Game);
