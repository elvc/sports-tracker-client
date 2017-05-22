import React from 'react';
import PropTypes from 'prop-types';

const RoomTab = props => (
  <div className="chat-tabs">
    <a
      className={ props.active ? 'active room-tab' : 'room-tab' }
      onClick={ () => props.onTabClick(props.id) }
      role="button"
      tabIndex={ 0 }
    >
      { props.name }
    </a>
  </div>
);

RoomTab.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

export default RoomTab;
