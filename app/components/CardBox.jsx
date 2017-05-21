import React, { Component } from 'react';
import Cards from './cards.jsx';

export default class CardBox extends Component {
  render() {
    // cards container
    return (
        <div className="container" id="main">
          <div className="row">
            <div className="card-container col-xs-12 col-md-9">
              <Cards />
            </div>
          </div>
        </div>
    );
  }
}

