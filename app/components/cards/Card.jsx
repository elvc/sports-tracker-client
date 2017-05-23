import PropTypes from 'prop-types'; // for React v15.5
import React from 'react';

export default function Card({ ...props }) {
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

  const name = `${props.awayTeam} @ ${props.homeTeam}`;

  return (
    <div className="card-deck">
      <div className="card">
        <div className="card-block">
          <div className="d-flex justify-content-around">
            <div className="card-title">{ props.league }</div>
          </div>
          <div className="d-flex justify-content-around">
            <div className="card-title">April 1, 2017</div>
          </div>

          <div className="d-flex justify-content-around">
            <div className="card-text d-flex flex-column">
              <div className="text-center">{ props.awayTeam }</div>
              <div>{ props.awayScore }</div>
            </div>
            <div className="card-text d-flex flex-column">
              <div>{ props.homeTeam }</div>
              <div>{ props.homeScore }</div>
            </div>
          </div>

          <div className="d-flex justify-content-around">
            <div className="card-title">Quarter: { props.quarter } </div>
            <div className="card-title">Time Remaining: { props.timeRemaining } </div>
          </div>

        </div>
        <div className="card-footer d-flex justify-content-end">
          <button className="btn btn-info mr-auto p-2">Play-by-Play</button>
          <i className="p-2 fa fa-share-alt" aria-hidden="true" />
          <i className="p-2 fa fa-rss" aria-hidden="true" />
          <a onClick={ () => joinChat(name, props.gameId) } role="button" tabIndex={ 0 }>
            <i className="p-2 fa fa-commenting" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  league: PropTypes.string.isRequired,
  homeTeam: PropTypes.string.isRequired,
  awayTeam: PropTypes.string.isRequired,
  homeScore: PropTypes.number.isRequired,
  awayScore: PropTypes.number.isRequired,
  quarter: PropTypes.number.isRequired,
  timeRemaining: PropTypes.number.isRequired,
  gameId: PropTypes.number.isRequired,
  joinRoom: PropTypes.func.isRequired,
  socket: PropTypes.object.isRequired
};
