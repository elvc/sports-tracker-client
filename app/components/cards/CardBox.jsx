import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Card from './Card';
import EmptyDashboard from '../EmptyDashboard';
import cardProps from '../../prop_validations/card';
import api from '../../lib/api';

const masonryOptions = {
  transitionDuration: 500,
  fitWidth: true,
  horizontalOrder: true,
  stagger: 30
};

@DragDropContext(HTML5Backend)
export default class CardBox extends React.Component {


  closeCard = (gameId) => {
    const HOST = location.origin.replace('8081', '8080');
    this.props.leaveRoom(gameId);
    this.props.removeCard(gameId);
    const gameid = { gameId };
    api.post(`${HOST}/users/remove`, gameid).then((result) => { console.log(result); })
    .catch((error) => {
      console.log(error);
    });
  };

  moveCard = (dragIndex, hoverIndex) => {
    this.props.repositionCard(dragIndex, hoverIndex);
  };

  render() {
    const { allCards, joinRoom, togglePlayByPlay, chatActive } = this.props;

    return (
      <main className={ chatActive ? 'dashboard chat-active' : 'dashboard' }>
        <h1>Dashboard</h1>
        { allCards.length === 0 && <EmptyDashboard showModal={ this.props.showModal } /> }
        <Masonry
          className="game-card-box"
          elementType={ 'div' }
          options={ masonryOptions }
        >
          { allCards.map((card, i) => (
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
            ))}
        </Masonry>
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
    }),
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
