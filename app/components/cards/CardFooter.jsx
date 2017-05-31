import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = (props) => {
  const joinChat = (name, id) => {
    const room = {
      name,
      id,
      messages: [],
      onlineUsers: 0,
      input: '',
      unread: false
    };
    props.joinRoom(room);
  };

  const { homeTeam, awayTeam, date, startTime } = props;
  const shareInfo = {
    homeTeam,
    awayTeam,
    date
  };
  const notifyInfo = {
    homeTeam,
    awayTeam,
    date,
    startTime
  };

  return (
    <div className="game-card-footer">
      { props.gameStarted && <a
        className="game-card-pbp-btn d-flex flex-column"
        onClick={ () => props.togglePlayByPlay(props.gameId) }
        role="button"
        tabIndex={ 0 }
      >Play-by-Play</a>
        }

      <div className="game-card-social">
        <a
          onClick={ () => props.showModal('SHARE', shareInfo) }
          role="button"
          tabIndex={ 0 }
          className="game-card-tooltip"
        >
          <i className="p-2 fa fa-share-alt" aria-hidden="true" />
          <span role="button" className="game-card-tooltip-text">Share</span>
        </a>


        { props.gameStarted || <a
          onClick={ () => props.showModal('NOTIFY', notifyInfo) }
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
              try {
                document.getElementById('chat-input').focus();
              } catch (error) {

              }
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
  showModal: PropTypes.func.isRequired,
  joinRoom: PropTypes.func.isRequired,
  awayTeam: PropTypes.string.isRequired,
  homeTeam: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired
};

export default CardFooter;
