import PropTypes from 'prop-types';

export default {
  league: PropTypes.string.isRequired,
  homeTeam: PropTypes.string.isRequired,
  awayTeam: PropTypes.string.isRequired,
  homeScore: PropTypes.number.isRequired,
  awayScore: PropTypes.number.isRequired,
  quarter: PropTypes.number.isRequired,
  timeRemaining: PropTypes.number.isRequired
};
