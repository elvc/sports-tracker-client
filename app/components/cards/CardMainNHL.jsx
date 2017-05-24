import React from 'react';
import PropTypes from 'prop-types';
import cardProps from '../../prop_validations/card';
import ordinalize from '../../helpers/ordinalize';

const CardMainNBA = ({ ...props }) => (
  <div className="card-block">

    <div className="d-flex justify-content-around">
      <div className="card-text d-flex flex-column">
        <div className="text-center">
          <img src={ `/img/${props.league}/${props.awayTeam}.gif` } className="nba-team-logo" alt="" />
          <span className="nba-team-name">{ props.awayTeam }</span>
        </div>
      </div>

      <div className="card-text d-flex flex-column">
        <div>
          <span className="nba-team-name">{ props.homeTeam }</span>
          <img src={ `/img/${props.league}/${props.homeTeam}.gif` } className="nba-team-logo" alt="" />
        </div>
      </div>
    </div>

    <div className="nba-score">
      <span className="nba-score-away">{ props.awayScore }</span><span className="nba-score-home">{ props.homeScore }</span>
    </div>

    <div className="nba-time">
      { ordinalize(props.quarter)} - { props.timeRemaining }
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

CardMainNBA.propTypes = {
  ...cardProps,
  closeCard: PropTypes.func.isRequired
};

export default CardMainNBA;
