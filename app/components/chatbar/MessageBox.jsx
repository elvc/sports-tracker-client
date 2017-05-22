import React from 'react';
import PropTypes from 'prop-types';

const MessageBox = ({ input, onChange, handleSubmit }) => (
  <form onSubmit={ handleSubmit }>
    <input type="text" id="chat-input" value={ input } onChange={ onChange } autoComplete="off" />
    <input type="submit" value="Send" />
  </form>
);

MessageBox.propTypes = {
  input: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default MessageBox;
