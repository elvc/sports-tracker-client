import React from 'react';
import PropTypes from 'prop-types';

const RoomTab = props => (
  <div className="chat-tabs">
    <a
      className={ props.active ? 'active room-tab' : 'room-tab' }
      onClick={ () => props.onTabClick(props.room.id) }
      role="button"
      tabIndex={ 0 }
    >
      { props.room.name }
    </a>
  </div>
);

RoomTab.propTypes = {
  room: PropTypes.object.isRequired,
  onTabClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

export default RoomTab;
