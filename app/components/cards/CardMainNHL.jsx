import React from 'react';
import PropTypes from 'prop-types';
import cardProps from '../../prop_validations/card';
import ordinalize from '../../helpers/ordinalize';


const CardMainNHL = ({ ...props }) => {
  let timeString;
  if (props.plays.length !== 0 && props.isCompleted) {
    timeString = 'Final';
  } else if (props.plays.length !== 0 && !props.isCompleted) {
    timeString = `${ordinalize(props.period)} - ${props.timeRemaining}`;
  } else {
    timeString = `${props.startTime} - ${props.date.replace('2017-', '').replace('-', '/')}/2017`;
  }

  return (
    <div className="game-card-main">

      <div className="d-flex justify-content-around">
        <div className="d-flex flex-column">
          <div className="text-center">
            <img src={ `/img/nhl/${props.awayTeam.toLowerCase()}.gif` } className="nhl-team-logo" alt="" />
            <span className="nhl-team-name">{ props.awayTeam }</span>
          </div>
        </div>

        <div className="d-flex flex-column">
          <div>
            <span className="nhl-team-name">{ props.homeTeam }</span>
            <img src={ `/img/nhl/${props.homeTeam.toLowerCase()}.gif` } className="nhl-team-logo" alt="" />
          </div>
        </div>
      </div>

      <div className="nhl-time">
        { timeString }
      </div>

      {/* eslint-disable react/no-array-index-key */}
      {/* TODO add support for overtime, styling should work already */}
      { props.gameStarted && <div className="nhl-score">
        <table>
          <thead>
            <tr>
              { [...Array(4)].map((x, i) => <th key={ i } className="nhl-score-periods">{ i || '' }</th>) }
              { props.period.length > 3 && props.period.map((period, i) => {
                if (i > 2) {
                  return <th key={ i + 10 } className="nhl-score-periods">{ period.period }</th>;
                }
                return null;
              })}
              <th>T</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="nhl-score-team-name">{ props.awayTeam }</td>
              { [...Array(3)].map((x, i) => <td key={ i }>{ props.periods[i] ? props.periods[i].awayScore : '' }</td>) }
              { props.periods.length > 3 && props.periods.map((period, i) => {
                if (i > 2) {
                  return <td key={ i + 10 }>{ props.periods[i] ? props.periods[i].awayScore : '' }</td>;
                }
                return null;
              })}
              <td>{ props.awayScore }</td>
            </tr>
            <tr>
              <td className="nhl-score-team-name">{ props.homeTeam }</td>
              { [...Array(3)].map((x, i) => <td key={ i }>{ props.periods[i] ? props.periods[i].homeScore : '' }</td>) }
              { props.periods.length > 3 && props.periods.map((period, i) => {
                if (i > 2) {
                  return <td key={ i + 10 }>{ props.periods[i] ? props.periods[i].homeScore : '' }</td>;
                }
                return null;
              })}
              <td>{ props.homeScore }</td>
            </tr>
          </tbody>
        </table>
      </div>
      }
      {/* eslint-enable */}

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

CardMainNHL.propTypes = {
  ...cardProps,
  closeCard: PropTypes.func.isRequired
};

export default CardMainNHL;
