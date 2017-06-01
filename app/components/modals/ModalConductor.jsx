import React from 'react';
import PropTypes from 'prop-types';
import RegForm from './RegForm';
import LoginForm from './LoginForm';
import ShareForm from './ShareForm';
import NotifyForm from './NotifyForm';

const ModalConductor = ({ modal, closeModal, notify, login, addCard, receiveCard, email }) => {
  switch (modal.modal) {
    case 'NONE':
      return null;
    case 'LOGIN':
      return (
        <LoginForm
          close={ closeModal }
          notify={ notify }
          login={ login }
          addCard={ addCard }
          receiveCard={ receiveCard }
        />
      );
    case 'REGISTER':
      return (
        <RegForm
          close={ closeModal }
          notify={ notify }
          login={ login }
        />
      );
    case 'SHARE':
      return (
        <ShareForm
          close={ closeModal }
          notify={ notify }
          { ...modal.info }
        />
      );
    case 'NOTIFY':
      return (
        <NotifyForm
          close={ closeModal }
          notify={ notify }
          email={ email }
          { ...modal.info }
        />
      );
    default:
      return null;
  }
};

ModalConductor.defaultProps = {
  email: ''
}

ModalConductor.propTypes = {
  closeModal: PropTypes.func.isRequired,
  notify: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  receiveCard: PropTypes.func.isRequired,
  email: PropTypes.string,
  modal: PropTypes.shape({
    modal: PropTypes.string.isRequired,
    info: PropTypes.shape({})
  }).isRequired
};

export default ModalConductor;
