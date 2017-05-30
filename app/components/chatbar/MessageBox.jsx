import React from 'react';
import PropTypes from 'prop-types';

const MessageBox = ({ input, onChange, handleSubmit, toggleEmoji }) => {
  const removeEmojiPicker = (e) => {
    const emojiButton = document.querySelector('span[role="img"]');
    const emojiPicker = document.querySelector('.emoji-mart');
    if (emojiPicker && !emojiPicker.contains(e.target) && e.target !== emojiButton) {
      toggleEmoji();
      document.removeEventListener('click', removeEmojiPicker);
    }
  };

  const displayEmojiPicker = (e) => {
    toggleEmoji();
    document.removeEventListener('click', removeEmojiPicker);
    document.addEventListener('click', removeEmojiPicker);
    return false;
  };

  return (
    <form className="chat-input-form d-flex justify-content-center" onSubmit={ handleSubmit }>

      <div className="input-group">
        <input type="text" className="form-control" id="chat-input" value={ input } onChange={ onChange } autoComplete="off" placeholder="Type something..." />
        <span className="input-group-btn">
          <button className="btn btn-info" type="submit">Send</button>
        </span>
      </div>
      <a
        onClick={ displayEmojiPicker }
        role="button"
        tabIndex={ 0 }
        className="emoji-btn"
      >
        <span role="img" aria-label="display emoji picker">🏆</span>
      </a>
    </form>
  )
;
};

MessageBox.propTypes = {
  input: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  toggleEmoji: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default MessageBox;
