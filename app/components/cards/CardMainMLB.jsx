import React from 'react';
import PropTypes from 'prop-types';
import cardProps from '../../prop_validations/card';
import ordinalize from '../../lib/ordinalize';

const CardMainMLB = ({ ...props }) => {
  let timeString;
  if (props.innings.length !== 0 && props.isCompleted) {
    timeString = 'Final';
  } else if (props.innings.length !== 0 && !props.isCompleted) {
    timeString = `${props.currentInningHalf} of ${ordinalize(props.currentInning)}`;
  } else {
    timeString = `${props.startTime} - ${props.date.replace('2017-', '').replace('-', '/')}/2017`;
  }

  return (
    <div className="game-card-main">

      <div className="d-flex justify-content-around">
        <div className="d-flex flex-column">
          <div className="text-center">
            <img src={ `/img/mlb/${props.awayTeam.toLowerCase()}.gif` } className="mlb-team-logo" alt="" />
            <span className="mlb-team-name">{ props.awayTeam }</span>
          </div>
        </div>

        <div className="d-flex flex-column">
          <div>
            <span className="mlb-team-name">{ props.homeTeam }</span>
            <img src={ `/img/mlb/${props.homeTeam.toLowerCase()}.gif` } className="mlb-team-logo" alt="" />
          </div>
        </div>
      </div>

      <div className="mlb-innings pb-2">
        { timeString }
      </div>


      {/* eslint-disable react/no-array-index-key */}
      {props.gameStarted && <div className="mlb-score">
        <table>
          <thead>
            <tr>
              { [...Array(10)].map((x, i) => <th key={ i } className="mlb-score-innings">{ i || '' }</th>) }
              { props.innings.length > 9 && props.innings.map((inning, i) => {
                if (i > 8) {
                  return <th key={ i + 10 } className="mlb-score-innings">{ inning['@number'] }</th>;
                }
                return null;
              })}
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="mlb-score-team-name">{ props.awayTeam }</td>
              { [...Array(9)].map((x, i) => <td key={ i }>{ props.innings[i] ? props.innings[i].awayScore : '' }</td>) }
              { props.innings.length > 9 && props.innings.map((inning, i) => {
                if (i > 8) {
                  return <td key={ i + 10 }>{ props.innings[i] ? props.innings[i].awayScore : '' }</td>;
                }
                return null;
              })}
              <td>{ props.awayScore }</td>
            </tr>

            <tr>
              <td className="mlb-score-team-name">{ props.homeTeam }</td>
              { [...Array(9)].map((x, i) => <td key={ i }>{ props.innings[i] ? props.innings[i].homeScore : '' }</td>) }
              { props.innings.length > 9 && props.innings.map((inning, i) => {
                if (i > 8) {
                  return <td key={ i + 10 }>{ props.innings[i] ? props.innings[i].homeScore : '' }</td>;
                }
                return null;
              })}
              <td>{ props.homeScore }</td>
            </tr>
          </tbody>
        </table>
      </div>}
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

CardMainMLB.propTypes = {
  ...cardProps,
  closeCard: PropTypes.func.isRequired
};

export default CardMainMLB;
