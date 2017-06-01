import React from 'react';
import PropTypes from 'prop-types';
import RegForm from './RegForm';
import LoginForm from './LoginForm';
import ShareForm from './ShareForm';
import NotifyForm from './NotifyForm';
import FavoriteForm from './FavoriteForm';

const ModalConductor = ({ modal, closeModal, receiveFavorites, notify, login, addCard, receiveCard, email, username }) => {
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
          receiveFavorites={ receiveFavorites }
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
    case 'FAVORITE':
      return (
        <FavoriteForm
          close={ closeModal }
          notify={ notify }
          username={ username }
          receiveFavorites={ receiveFavorites }
        />
      );
    default:
      return null;
  }
};

ModalConductor.defaultProps = {
  email: '',
  username: ''
};

ModalConductor.propTypes = {
  closeModal: PropTypes.func.isRequired,
  notify: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  receiveCard: PropTypes.func.isRequired,
  receiveFavorites: PropTypes.func.isRequired,
  username: PropTypes.string,
  email: PropTypes.string,
  modal: PropTypes.shape({
    modal: PropTypes.string.isRequired,
    info: PropTypes.shape({})
  }).isRequired
};

export default ModalConductor;
