import React from 'react';
import PropTypes from 'prop-types';

const RoomTab = (props) => {
  let roomClass = '';
  if (props.active) {
    roomClass = 'active chat-tabs';
  } else if (props.unread) {
    roomClass = 'unread chat-tabs';
  } else {
    roomClass = 'chat-tabs';
  }
  return (
    <div className={ roomClass }>
      <a
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
        <i className="fa fa-times" />
      </a>
    </div>
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
