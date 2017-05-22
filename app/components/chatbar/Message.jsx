import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => (
  <li>
    <span className="chat-user">{ message.user.name }</span> ${ message.content }
  </li>
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
