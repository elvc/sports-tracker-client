import PropTypes from 'prop-types'; // for React v15.5
import React, { Component } from 'react';
import Card from './Card';

export default class CardBox extends Component {

  render() {
    // cards container rendering all cards
    const { allCards, joinRoom, socket } = this.props;

    return (
      <div className="card-container col-xs-12 col-s-9">
        <div className="row">
          { allCards.map(card => <Card key={ card.gameId } joinRoom={ joinRoom } socket={ socket } { ...card } />) }
        </div>
      </div>
    );
  }
}

CardBox.propTypes = {
  allCards: PropTypes.arrayOf(PropTypes.shape({
    league: PropTypes.string.isRequired,
    homeTeam: PropTypes.string.isRequired,
    awayTeam: PropTypes.string.isRequired,
    homeScore: PropTypes.number.isRequired,
    awayScore: PropTypes.number.isRequired,
    quarter: PropTypes.number.isRequired,
    timeRemaining: PropTypes.number.isRequired
  }).isRequired).isRequired,
  joinRoom: PropTypes.func.isRequired,
  socket: PropTypes.object.isRequired
};
