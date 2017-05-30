import React from 'react';
import PropTypes from 'prop-types';
import RegForm from './RegForm';
import LoginForm from './LoginForm';
import ShareForm from './ShareForm';

const ModalConductor = ({ modal, closeModal, notify, login, receiveCard }) => {
  switch (modal.modal) {
    case 'NONE':
      return null;
    case 'LOGIN':
      return (
        <LoginForm
          close={ closeModal }
          notify={ notify }
          login={ login }
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
    default:
      return null;
  }
};

ModalConductor.propTypes = {
  closeModal: PropTypes.func.isRequired,
  notify: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  receiveCard: PropTypes.func.isRequired,
  modal: PropTypes.shape({
    modal: PropTypes.string.isRequired,
    info: PropTypes.shape({})
  }).isRequired
};

export default ModalConductor;
