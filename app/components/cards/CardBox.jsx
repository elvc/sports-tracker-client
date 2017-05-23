import PropTypes from 'prop-types'; // for React v15.5
import React from 'react';
import Card from './Card';
import cardProps from '../../prop_validations/card';

export default function CardBox(props) {
    // cards container rendering all cards
  const { allCards, joinRoom, socket = {} } = props;

  return (
    <div className="card-container col-xs-12 col-s-9">
      <div className="row">
        {allCards.map(card => (
          <Card
            key={ card.gameId }
            joinRoom={ joinRoom }
            socket={ socket }
            { ...card }
          />
        ))}
      </div>
    </div>
  );
}

CardBox.propTypes = {
  allCards: PropTypes.arrayOf(PropTypes.shape({
    ...cardProps,
    plays: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired).isRequired
  }).isRequired).isRequired,
  joinRoom: PropTypes.func.isRequired,
  socket: PropTypes.object
};
