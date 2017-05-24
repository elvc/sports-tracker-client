import React from 'react';
import PropTypes from 'prop-types';

const PlayByPlay = ({ ...props }) => {
  if (props.display) {
    return (
      <div className="play-by-play d-flex">
        <h4>Play-by-play</h4>
        <ul>
          { props.plays.map((play) => {
            switch (play.sport) {
              case 'nhl':
                return (
                  <li key={ play.id } className={ play.style }>
                    <span className="time-play-nhl">{ play.time } </span>
                    { play.content }
                  </li>
                );
              case 'mlb':
                return <li key={ play.id } className={ play.style }>{ play.content }</li>;
              case 'nba':
                return <li key={ play.id }>{ play.content }</li>;
              default:
                return null;
            }
          })}
        </ul>
      </div>
    );
  }
  return null;
};

PlayByPlay.propTypes = {
  display: PropTypes.bool.isRequired,
  plays: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default PlayByPlay;
