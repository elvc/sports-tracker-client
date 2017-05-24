import PropTypes from 'prop-types';

export default {
  rooms: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape({
      user: PropTypes.shape({
        name: PropTypes.string.isRequired
      }).isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onlineUsers: PropTypes.number.isRequired,
    input: PropTypes.string.isRequired
  }).isRequired).isRequired
};
