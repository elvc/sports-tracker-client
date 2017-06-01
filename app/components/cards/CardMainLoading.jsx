import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'halogenium/ScaleLoader';
import cardProps from '../../prop_validations/card';

const CardMainLoading = ({ ...props }) => (
  <div className="game-card-main loading">
    <div className="d-flex justify-content-around game-card-main">
      <div className="d-flex flex-column">
        <div className="text-center">
          <span className="nba-team-name">{props.awayTeam}</span>
        </div>
      </div>

      <div className="d-flex flex-column">
        <div>
          <span className="nba-team-name">{props.homeTeam}</span>
        </div>
      </div>
    </div>
    { props.failedLoad || <Loader className="game-card-loader" color={ 'aqua' } /> }
    { props.failedLoad && <div className="failed-load">No game data available at this time</div> }
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

CardMainLoading.propTypes = {
  ...cardProps,
  closeCard: PropTypes.func.isRequired
};

export default CardMainLoading;
