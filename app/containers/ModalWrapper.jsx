import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { addNotification as notify } from 'reapop';
import { login, closeModal, receiveCard, addCard, receiveFavorites, failedCardLoad } from '../actions';
import ModalConductor from '../components/modals/ModalConductor';

class ModalWrapper extends Component {

  onModalOpen = () => {
    let input = document.querySelector('input');
    if (!input) {
      input = document.querySelector('select');
    }
    input.focus();
  }

  render() {
    const modalStyles = {
      content: {
        width: '50vw',
        padding: '30px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        zIndex: '5000',
        marginRight: '-50%',
        transition: 'all 400ms ease-in-out',
        transform: 'translate(-50%, -50%)'
      }
    };
    return (
      <Modal
        isOpen={ this.props.modal.modal !== 'NONE' }
        onRequestClose={ this.props.closeModal }
        onAfterOpen={ this.onModalOpen }
        style={ modalStyles }
        shouldCloseOnOverlayClick={ false }
        contentLabel="Modal"
      >
        <ModalConductor { ...this.props } />
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  email: state.user.email,
  username: state.user.name
});

const mapDispatchToProps = {
  login,
  closeModal,
  notify,
  addCard,
  receiveCard,
  receiveFavorites,
  failedCardLoad
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
