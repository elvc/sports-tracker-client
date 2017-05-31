import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'halogen/ScaleLoader';
import Masonry from 'react-masonry-component';
import { DragDropContext } from 'react-dnd';
import MultiBackend, { Preview } from 'react-dnd-multi-backend';
import dndBackend from '../../lib/dndBackend';
import Card from './Card';
import cardProps from '../../prop_validations/card';
import api from '../../lib/api';

const masonryOptions = {
  transitionDuration: 500,
  fitWidth: true,
  horizontalOrder: true,
  stagger: 30
};

@DragDropContext(MultiBackend(dndBackend))
export default class CardBox extends React.Component {


  closeCard = (gameId) => {
    const HOST = location.origin.replace('8081', '8080');
    this.props.leaveRoom(gameId);
    this.props.removeCard(gameId);
    const gameid = { gameId };
    api.post(`${HOST}/users/remove`, gameid).then((result) => {});
  };

  moveCard = (dragIndex, hoverIndex) => {
    this.props.repositionCard(dragIndex, hoverIndex);
  };

  generatePreview = (type, item, style) => {
    Object.assign(style, { backgroundColor: item.color, width: '350px', height: '250px' });
    return <div style={ { backgroundColor: 'black', opacity: 1 } } />;
  }

  render() {
    const { allCards, joinRoom, togglePlayByPlay, chatActive } = this.props;

    return (
      <main className={ chatActive ? 'dashboard chat-active' : 'dashboard' }>
        <h1>Dashboard</h1>
        <Masonry
          className="game-card-box"
          elementType={ 'div' }
          options={ masonryOptions }
        >
          { allCards.map((card, i) => {
            if (card.isLoading) {
              return (
                <div key={ card.gameId } className="game-card loading">
                  <div className="d-flex justify-content-around game-card-main">
                    <div className="d-flex flex-column">
                      <div className="text-center">
                        <span className="nba-team-name">{card.awayTeam}</span>
                      </div>
                    </div>

                    <div className="d-flex flex-column">
                      <div>
                        <span className="nba-team-name">{card.homeTeam}</span>
                      </div>
                    </div>
                  </div>
                  <Loader className="game-card-loader" color={ 'aqua' } />
                  <aside
                    className="close-game-card"
                    onClick={ () => this.closeCard(card.gameId) }
                    role="button"
                    tabIndex={ 0 }
                  >
                    <i className="fa fa-times exit-room" />
                  </aside>
                </div>
              );
            }
            return (
              <Card
                key={ card.gameId }
                joinRoom={ joinRoom }
                togglePlayByPlay={ togglePlayByPlay }
                closeCard={ this.closeCard }
                moveCard={ this.moveCard }
                index={ i }
                notify={ this.props.notify }
                showModal={ this.props.showModal }
                { ...card }
              />
            );
          })}
        </Masonry>
        <Preview generator={ this.generatePreview } />
      </main>
    );
  }
}

CardBox.propTypes = {
  allCards: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({
      ...cardProps,
      displayPlayByPlay: PropTypes.bool.isRequired,
      plays: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired
      }).isRequired).isRequired
    }).isRequired,
    PropTypes.shape({
      homeTeam: PropTypes.string.isRequired,
      awayTeam: PropTypes.string.isRequired,
      gameId: PropTypes.number.isRequired,
      isLoading: PropTypes.bool.isRequired
    })
  ])).isRequired,
  togglePlayByPlay: PropTypes.func.isRequired,
  repositionCard: PropTypes.func.isRequired,
  leaveRoom: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  joinRoom: PropTypes.func.isRequired,
  chatActive: PropTypes.bool.isRequired,
  notify: PropTypes.func.isRequired
};
