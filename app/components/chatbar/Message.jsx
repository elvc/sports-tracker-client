import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => (
  <div className="message mb-3">
    <span className="chat-user">{ message.user.name }</span> ${ message.content }
  </div>
);

Message.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Message;
