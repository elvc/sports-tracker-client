import React, { Component } from 'react';
import Card from './card.jsx';

export default class CardBox extends Component {
  // skeleton to be updated
  
  render() {
    // cards container rendering all cards
    const { allCards } = this.props;
    return (
      <div className="container" id="main">
        <div className="row">
          <div className="card-container col-xs-12 col-md-9">
            { allCards.map(card => <Card key={ card.gameId } { ...card } />) }
          </div>
        </div>
      </div>
    );
  }
}

