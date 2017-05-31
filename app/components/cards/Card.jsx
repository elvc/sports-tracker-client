import React from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';

import CardMainNBA from './CardMainNBA';
import CardMainNHL from './CardMainNHL';
import CardMainMLB from './CardMainMLB';
import CardMainLoading from './CardMainLoading';
import PlayByPlay from './PlayByPlay';
import CardFooter from './CardFooter';
import cardProps from '../../prop_validations/card';

const cardSource = {
  beginDrag(props) {
    return {
      id: props.gameId,
      index: props.index
    };
  }
};
const cardTarget = {
  drop(props, monitor) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === hoverIndex) {
      return;
    }

    props.moveCard(dragIndex, hoverIndex);
  }
};

@DropTarget('card', cardTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
}))
@DragSource('card', cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
  connectDragPreview: connect.dragPreview()
}))
export default class Card extends React.Component {

  render() {
    const {
      isDragging,
      connectDragSource,
      connectDropTarget,
      connectDragPreview,
      isOver,
      displayPlayByPlay,
      league,
      plays,
      joinRoom,
      gameId,
      togglePlayByPlay,
      gameStarted
    } = this.props;
    const name = `${this.props.awayTeam}/${this.props.homeTeam}`;
    const opacity = isDragging || isOver ? 0.5 : 1;
    const previewOptions = {
      captureDraggingState: true,
      anchorX: 0,
      anchorY: 0
    };
    return connectDragSource(connectDropTarget(connectDragPreview(
      <div className="game-card" style={ { opacity } }>
        { league === 'NBA' && <CardMainNBA
          { ...this.props }
        />
        }
        { league === 'MLB' && <CardMainMLB
          { ...this.props }
        />
        }
        { league === 'NHL' && <CardMainNHL
          { ...this.props }
        />
        }
        { this.props.isLoading && <CardMainLoading { ...this.props } /> }

        { displayPlayByPlay && <PlayByPlay plays={ plays } /> }

        <CardFooter
          name={ name }
          joinRoom={ joinRoom }
          gameId={ gameId }
          togglePlayByPlay={ togglePlayByPlay }
          gameStarted={ gameStarted }
          notify={ this.props.notify }
          showModal={ this.props.showModal }
          awayTeam={ this.props.awayTeam }
          homeTeam={ this.props.homeTeam }
          date={ this.props.date }
        />
      </div>
    , previewOptions)));
  }
}
Card.defaultProps = {
  plays: [],
  gameStarted: false,
  displayPlayByPlay: false
};

Card.propTypes = {
  ...cardProps,
  displayPlayByPlay: PropTypes.bool,
  plays: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired),
  togglePlayByPlay: PropTypes.func.isRequired,
  gameStarted: PropTypes.bool,
  joinRoom: PropTypes.func.isRequired,
  closeCard: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
};
