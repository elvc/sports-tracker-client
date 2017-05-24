import React from 'react';
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
  </div>
);

CardMain.propTypes = cardProps;

export default CardMain;
