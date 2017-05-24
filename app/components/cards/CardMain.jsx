import React from 'react';
import PropTypes from 'prop-types';
import cardProps from '../../prop_validations/card';

const CardMain = ({ ...props }) => (
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
    <aside
      className="close-card"
      onClick={ () => props.closeCard(props.gameId) }
      role="button"
      tabIndex={ 0 }
    >
      <i className="fa fa-times exit-room" />
    </aside>
  </div>
);

CardMain.propTypes = {
  ...cardProps,
  closeCard: PropTypes.func.isRequired
};

export default CardMain;
