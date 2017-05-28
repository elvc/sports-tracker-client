import React from 'react';
import PropTypes from 'prop-types';
import cardProps from '../../prop_validations/card';
import ordinalize from '../../helpers/ordinalize';

const CardMainNBA = ({ ...props }) => {
  let timeString;
  if (props.plays.length !== 0 && props.isCompleted) {
    timeString = 'Final';
  } else if (props.plays.length !==0 && !props.isCompleted) {
    timeString = `${ordinalize(props.quarter)} - ${props.timeRemaining}`;
  } else {
    timeString = props.startTime;
  }

  return (
    <div className="game-card-main">

      <div className="d-flex justify-content-around">
        <div className="d-flex flex-column">
          <div className="text-center">
            <img src={ `/img/nba/${props.awayTeam.toLowerCase()}.gif` } className="nba-team-logo" alt="" />
            <span className="nba-team-name">{ props.awayTeam }</span>
          </div>
        </div>

        <div className="d-flex flex-column">
          <div>
            <span className="nba-team-name">{ props.homeTeam }</span>
            <img src={ `/img/nba/${props.homeTeam.toLowerCase()}.gif` } className="nba-team-logo" alt="" />
          </div>
        </div>
      </div>

      <div className="nba-score">
        <span className="nba-score-away">{ props.awayScore }</span><span className="nba-score-home">{ props.homeScore }</span>
      </div>

      <div className="nba-time">
        { timeString }
      </div>

      <aside
        className="close-game-card"
        onClick={ () => props.closeCard(props.gameId) }
        role="button"
        tabIndex={ 0 }
      >
        <i className="fa fa-times exit-room" />
      </aside>
    </div>
  );
};

CardMainNBA.propTypes = {
  ...cardProps,
  closeCard: PropTypes.func.isRequired
};

export default CardMainNBA;
