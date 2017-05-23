import React from 'react';
import PropTypes from 'prop-types';

const RoomTab = (props) => {
  let roomClass = '';
  if (props.active) {
    roomClass = 'nav-link active';
  } else if (props.unread) {
    roomClass = 'nav-link unread chat-tabs';
  } else {
    roomClass = 'nav-link chat-tabs';
  }
  return (
    <li className="nav-item">
      <div className={ roomClass }>
        <a
          className="room"
          onClick={ () => props.onTabClick(props.id) }
          role="button"
          tabIndex={ 0 }
        >
          { props.name }
        </a>
        <a
          onClick={ () => props.closeChat(props.id) }
          role="button"
          tabIndex={ 0 }
        >
          <i className="fa fa-times exit-room" />
        </a>
      </div>
    </li>
  );
};

RoomTab.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  closeChat: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  unread: PropTypes.bool.isRequired
};

export default RoomTab;
