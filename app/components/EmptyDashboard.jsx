import React from 'react';
import PropTypes from 'prop-types';

const EmptyDashboard = (props) => {
  if (props.username) {
    return (
      <div>
        <h3 className="welcome-message">Choose a game to add a card</h3>
      </div>
    );
  }
  return (
    <div>
      <h3 className="welcome-message">Choose a game to add a card or <a
        onClick={ () => props.showModal('LOGIN') }
        role="button"
        tabIndex={ 0 }
      >click here</a> to login</h3>
    </div>
  );
};

EmptyDashboard.defaultProps = {
  username: ''
};

EmptyDashboard.propTypes = {
  showModal: PropTypes.func.isRequired,
  username: PropTypes.string
};

export default EmptyDashboard;
