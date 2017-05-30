import React from 'react';
import PropTypes from 'prop-types';

const LoginRegButton = props => (
  <ul className="navbar-nav ml-auto">
    <li className="nav-item text-right pb-2 pt-2">
      <a className="reg-btn navitem" onClick={ () => props.showModal('REGISTER') }>Registration</a>
    </li>

    <li className="nav-item text-right pb-2 pt-2">
      <a className="login-btn navitem" onClick={ () => props.showModal('LOGIN') }>Login</a>
    </li>
  </ul>
    );


LoginRegButton.propTypes = {
  showModal: PropTypes.func.isRequired
};

export default LoginRegButton;
