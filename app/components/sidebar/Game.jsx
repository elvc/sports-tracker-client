import React from 'react';
import PropTypes from 'prop-types';

const Game = (props) => {
  return (
    <div>
      <li>
        {props.awayTeam.Abbreviation} @ {props.homeTeam.Abbreviation} ({props.time})
      </li>
    </div>
  );
};

Game.propTypes = {
  location: PropTypes.string.isRequired,
  awayTeam: PropTypes.object.isRequired,
  homeTeam: PropTypes.object.isRequired,
  time: PropTypes.string.isRequired
};

export default Game;