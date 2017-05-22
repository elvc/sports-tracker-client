import React, { Component } from 'react';
import Card from './Card';

export default class CardBox extends Component {
  // skeleton to be updated

  render() {
    // cards container rendering all cards
    const { allCards } = this.props;
    return (
      <div className="card-container col-xs-12 col-md-9">
        <div className="row">
          { allCards.map(card => <Card key={ card.gameId } { ...card } />) }
        </div>
      </div>
    );
  }
}

