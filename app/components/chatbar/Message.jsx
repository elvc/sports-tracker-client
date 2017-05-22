import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => (
  <table className="message-container table table-sm">
    <tbody>
      <tr>
        <th scope="row" className="chat-user">{ message.user.name }</th>
        <td className="message text-left">{ message.content }</td>
      </tr>
    </tbody>
  </table>
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
