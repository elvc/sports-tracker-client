import React from 'react';
import PropTypes from 'prop-types';

const RoomTab = props => (
  <div className="chat-tabs">
    <a
      className={ props.active ? 'active room-tab' : 'room-tab' }
      onClick={ () => props.onTabClick(props.room.game) }
      role="button"
      tabIndex={ 0 }
    >
      { props.room.name }
    </a>
  </div>
);

RoomTab.propTypes = {
  room: PropTypes.arrayOf(PropTypes.shape({
    game: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTabClick: PropTypes.func.isRequired
};

export default RoomTab;
