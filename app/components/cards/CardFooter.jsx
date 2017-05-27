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
    props.postJoinRoom(id);
    props.joinRoom(room);
  };

  return (
    <div className="game-card-footer">
      { props.gameStarted && <a
        className="game-card-pbp-btn"
        onClick={ () => props.togglePlayByPlay(props.gameId) }
        role="button"
        tabIndex={ 0 }
      >Play-by-Play</a>
      }

      <div className="game-card-social">
        <a
          onClick={ () => {
            joinChat(props.name, props.gameId);
            setTimeout(() => {
              document.getElementById('chat-input').focus();
            }, 0);
          } }
          role="button"
          tabIndex={ 0 }
          className="game-card-tooltip"
        >
          <i className="p-2 fa fa-share-alt" aria-hidden="true" />
          <span className="game-card-tooltip-text">Share</span>
        </a>
        { props.gameStarted || <a
          onClick={ () => {
            joinChat(props.name, props.gameId);
            setTimeout(() => {
              document.getElementById('chat-input').focus();
            }, 0);
          } }
          role="button"
          tabIndex={ 0 }
          className="game-card-tooltip"
        >
          <i className="p-2 fa fa-rss" aria-hidden="true" />
          <span className="game-card-tooltip-text">Notify me</span>
        </a> }
        <a
          onClick={ () => {
            joinChat(props.name, props.gameId);
            setTimeout(() => {
              document.getElementById('chat-input').focus();
            }, 0);
          } }
          role="button"
          tabIndex={ 0 }
          className="game-card-tooltip"
          id="chat-btn"
        >
          <i className="p-2 fa fa-commenting" aria-hidden="true" />
          <span className="game-card-tooltip-text">Join chat</span>
        </a>
      </div>
    </div>
  );
};

CardFooter.propTypes = {
  name: PropTypes.string.isRequired,
  gameId: PropTypes.number.isRequired,
  gameStarted: PropTypes.bool.isRequired,
  togglePlayByPlay: PropTypes.func.isRequired,
  joinRoom: PropTypes.func.isRequired
};

export default CardFooter;
