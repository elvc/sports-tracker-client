import React, { PropTypes } from 'react';

const ChatTabs = props => (
  <div className="chat-tabs">
    {
      props.tabs.map(tab => (
        <a
          key={ tab.id }
          className={ tab.active ? 'active item' : 'item' }
          onClick={ () => props.onTabClick(tab.id) }
          role="button"
          tabIndex={ 0 }
        >
          { tab.name }
        </a>
      ))
    }
  </div>
);

ChatTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTabClick: PropTypes.func.isRequired
};

export default ChatTabs;
