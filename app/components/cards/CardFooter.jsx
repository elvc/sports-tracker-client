import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = ({ ...props }) => {
  const joinChat = (name, id) => {
    const room = {
      name,
      id,
      messages: [],
      onlineUsers: 0,
      input: '',
      unread: false
    };
    props.socket.emit('join', { room: id });
    props.joinRoom(room);
  };

  return (
    <div className="card-footer d-flex justify-content-end">
      <button
        className="btn btn-info mr-auto p-2"
        onClick={ () => props.togglePlayByPlay(props.gameId) }
      >Play-by-Play</button>
      <i className="p-2 fa fa-share-alt" aria-hidden="true" />
      <i className="p-2 fa fa-rss" aria-hidden="true" />
      <a
        onClick={ () => {
          joinChat(props.name, props.gameId);
          setTimeout(() => {
            document.getElementById('chat-input').focus();
          }, 0);
        } }
        role="button"
        tabIndex={ 0 }
      >
        <i className="p-2 fa fa-commenting" aria-hidden="true" />
      </a>
    </div>
  );
};

CardFooter.propTypes = {
  name: PropTypes.string.isRequired,
  gameId: PropTypes.number.isRequired,
  togglePlayByPlay: PropTypes.func.isRequired,
  joinRoom: PropTypes.func.isRequired,
  socket: PropTypes.object.isRequired
};

export default CardFooter;
