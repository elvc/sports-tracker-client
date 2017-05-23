import React from 'react';
import PropTypes from 'prop-types';

const PlayByPlay = ({ ...props }) => {
  if (props.plays.length) {
    return (
      <div className="play-by-play d-flex">
        <h4>Play-by-play</h4>
        <ul>
          { props.plays.map(play => (
            <li key={ play.id }>{ play.content }</li>
            ))}
        </ul>
      </div>
    );
  }
  return null;
};

PlayByPlay.propTypes = {
  plays: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default PlayByPlay;
