import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receiveCard } from '../../actions';
import api from '../../lib/api';

const Game = (props) => {
  const HOST = location.origin.replace('8081', '8080');

  const add = (gameProps) => {
    const { dispatch } = gameProps;
    const game = {
      gameId: gameProps.gameId,
      league: gameProps.league,
      homeTeam: gameProps.homeTeam.Abbreviation,
      awayTeam: gameProps.awayTeam.Abbreviation,
      time: gameProps.time,
      date: gameProps.date
    };
    props.addCard(game.gameId, game.homeTeam, game.awayTeam);
    api.post(`${HOST}/leagues/${gameProps.league}/games/${gameProps.gameId}`, game).then((response) => {
      dispatch(receiveCard(response.response));
    }).catch((err) => {
      console.log(`Error adding card: ${err.message}`);
    });
    $('.sidebar').removeClass('show');
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
  gameId: PropTypes.number.isRequired,
  awayTeam: PropTypes.shape({}).isRequired,
  homeTeam: PropTypes.shape({}).isRequired,
  time: PropTypes.string.isRequired,
  addCard: PropTypes.func.isRequired
};

export default connect()(Game);
