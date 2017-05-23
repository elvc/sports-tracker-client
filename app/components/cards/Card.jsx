import React from 'react';
import PropTypes from 'prop-types';
import CardMain from './CardMain';
import PlayByPlay from './PlayByPlay';
import CardFooter from './CardFooter';
import cardProps from '../../prop_validations/card';

export default function Card({ ...props }) {
  const name = `${props.awayTeam} @ ${props.homeTeam}`;

  return (
    <div className="card-deck">
      <div className="card">

        <CardMain
          league={ props.league }
          homeTeam={ props.homeTeam }
          awayTeam={ props.awayTeam }
          homeScore={ props.homeScore }
          awayScore={ props.awayScore }
          quarter={ props.quarter }
          timeRemaining={ props.timeRemaining }

        />

        <PlayByPlay plays={ props.plays } />

        <CardFooter
          name={ name }
          socket={ props.socket }
          joinRoom={ props.joinRoom }
          gameId={ props.gameId }
        />

      </div>
    </div>
  );
}

Card.propTypes = {
  ...cardProps,
  plays: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired).isRequired,
  joinRoom: PropTypes.func.isRequired,
  socket: PropTypes.object
};
