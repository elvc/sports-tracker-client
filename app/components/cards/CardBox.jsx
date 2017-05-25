import PropTypes from 'prop-types'; // for React v15.5
import React from 'react';
import Card from './Card';
import cardProps from '../../prop_validations/card';

export default function CardBox(props) {
    // cards container rendering all cards
  const { allCards, joinRoom, socket = {}, togglePlayByPlay } = props;

  const closeCard = (gameId) => {
    props.leaveRoom(gameId);
    props.removeCard(gameId);
  };

  return (
    <div className="col-xs-12 col-md-9">
      <h1>Dashboard</h1>
      <div className="card-deck">
        { allCards.map(card => (
          <Card
            key={ card.gameId }
            joinRoom={ joinRoom }
            socket={ socket }
            togglePlayByPlay={ togglePlayByPlay }
            closeCard={ closeCard }
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
    displayPlayByPlay: PropTypes.bool.isRequired,
    plays: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired).isRequired
  }).isRequired).isRequired,
  togglePlayByPlay: PropTypes.func.isRequired,
  joinRoom: PropTypes.func.isRequired,
  socket: PropTypes.object
};
