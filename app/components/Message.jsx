import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => (
  <div className="message mb-3">
    { `${message.user}: ${message.content}` }
  </div>
);

// Message.propTypes = {
// };

export default Message;
