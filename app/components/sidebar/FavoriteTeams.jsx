import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game';

const LeagueItem = ({ leagueClick, notify, failedCardLoad, favoriteGames, isActive, addCard, showModal }) => {
  const activeLeagueClass = `d-flex justify-content-center league-heading pl-0 pt-3 pb-3 nav-link ${isActive ? 'active' : ''}`;
  return (
    <ul className="nav nav-pills mb-0 flex-column">
      <li className="nav-item" data-toggle="collapse" data-target={ '#favorite-teams' }>
        <div
          onClick={ leagueClick }
          className={ activeLeagueClass }
          role="button"
          tabIndex={ 0 }
        >
          <img className="league-icon mr-2" src={ '/img/staricon.png' } alt="" />
          Favorite Teams
        </div>
      </li>
      <ul className="sub-menu collapse pl-0 league-heading" id="favorite-teams">
        <div className="game-container">
          <a onClick={ () => showModal('FAVORITE') } role="button" tabIndex={ 0 }>
            <li className="d-flex justify-content-center game pt-1">
              Add a team
            </li>
          </a>
        </div>
        {favoriteGames.map(game => (
          <Game
            key={ game.gameId }
            notify={ notify }
            failedCardLoad={ failedCardLoad }
            addCard={ addCard }
            { ...game }
          />
        ))}
        {favoriteGames.length === 0 && <div className="game-container">
          <li className="d-flex justify-content-center no-game pt-2 pb-2 pl-0">No upcoming games</li>
        </div>}
      </ul>
    </ul>
  );
};

LeagueItem.propTypes = {
  favoriteGames: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  leagueClick: PropTypes.func.isRequired,
  notify: PropTypes.func.isRequired,
  failedCardLoad: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default LeagueItem;
