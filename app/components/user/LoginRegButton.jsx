import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegForm from './RegForm';
import LoginForm from './LoginForm';
import Modal from 'react-modal';

export default class LoginRegButton extends Component {
  static propTypes = {
    handleLoginSession: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      regModalIsOpen: false,
      loginModalIsOpen: false
    }
  }
  
  // reset state
  resetState = () => {
    this.setState({
      regModalIsOpen: false,
      loginModalIsOpen: false
    });
  }

  regOpenModal = () => {
    this.setState({
      loginModalIsOpen: false,
      regModalIsOpen: true
    });
  }

  regCloseModal = () => {
    this.resetState();
  }

  loginOpenModal = () => {
    this.setState({
      loginModalIsOpen: true,
      regModalIsOpen: false
    });
  }

  loginCloseModal = () => {
    this.resetState();
  }

  render() {
    const modalStyles = {
      content: {
        width: '700px',
        padding: '30px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    };
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="navitem" onClick={ this.regOpenModal }>Registration</a>
          <Modal
            isOpen={ this.state.regModalIsOpen }
            onRequestClose={ this.regCloseModal }
            style={ modalStyles }
            shouldCloseOnOverlayClick={ false }
            contentLabel="Reg Modal"
          >
            <h3 className="pl-0 d-flex modal-header">Registration: <i className="fa fa-times justify-content-right" onClick={ this.regCloseModal } /></h3>
            <RegForm
              close={ this.regCloseModal }
              handleLoginSession={ this.props.handleLoginSession }
            />
          </Modal>
        </li>

        <li className="nav-item">
          <a className="navitem" onClick={ this.loginOpenModal }>Login</a>
          <Modal
            isOpen={ this.state.loginModalIsOpen }
            onRequestClose={ this.loginCloseModal }
            style={ modalStyles }
            shouldCloseOnOverlayClick={ false }
            contentLabel="Reg Modal"
          >
            <h3 className="pl-0 d-flex modal-header">Login: <i className="fa fa-times justify-content-right" onClick={ this.loginCloseModal } /></h3>
            <LoginForm
              close={ this.loginCloseModal }
              handleLoginSession={ this.props.handleLoginSession }
            />
          </Modal>
        </li>
      </ul>
    );
  }
}
