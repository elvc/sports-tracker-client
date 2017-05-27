import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCardInfo } from '../../actions/card'

const Game = (props) => {

  const add = (props) => {
    const {dispatch} = props;
    const game = {
        gameId: props.id,
        league: props.league,
        homeTeam: props.homeTeam.Abbreviation,
        awayTeam: props.awayTeam.Abbreviation,
        location: props.homeTeam.City,
        time: props.time,
        date: props.date
      };
    dispatch(fetchCardInfo(game));
  }

  return (
    <div>
      <a onClick={ () => add(props) } role="button">
        <li>
          {props.awayTeam.Abbreviation} @ {props.homeTeam.Abbreviation} ({props.time})
        </li>
      </a>
    </div>
  );
};

Game.propTypes = {
  league: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  awayTeam: PropTypes.object.isRequired,
  homeTeam: PropTypes.object.isRequired,
  time: PropTypes.string.isRequired
};

export default connect() (Game);