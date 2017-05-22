import PropTypes from 'prop-types';

export const rooms = {
  rooms: PropTypes.arrayOf(PropTypes.shape({
    game: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
      user: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onlineUsers: PropTypes.number.isRequired,
    input: PropTypes.string.isRequired
  }).isRequired).isRequired
};
