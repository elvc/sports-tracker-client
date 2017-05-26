import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const PlayByPlay = ({ ...props }) => {
  // <CSSTransitionGroup
  //   transitionName="pbp"
  //   transitionAppear
  //   transitionAppearTimeout={ 800 }
  //   transitionEnter
  //   transitionEnterTimeout={ 800 }
  //   transitionLeave
  //   transitionLeaveTimeout={ 800 }
  // >
  if (props.display) {
    return (
      <div className="game-card-pbp">
        <ul>
          { props.plays.map((play) => {
            switch (play.sport) {
              case 'NHL':
                return (
                  <li key={ play.id } className={ play.style }>
                    { play.content }
                  </li>
                );
              case 'MLB':
                return <li key={ play.id } className={ play.style }>{ play.content }</li>;
              case 'NBA':
                return (
                  <li key={ play.id }>
                    <span className="time-play-nba">{ play.time } - </span>
                    { play.content }
                  </li>);
              default:
                return null;
            }
          })}
        </ul>
      </div>

  // </CSSTransitionGroup>
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
