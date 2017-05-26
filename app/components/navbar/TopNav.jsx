import React, { Component } from 'react';
import RegForm from '../user/Reg';
import LoginForm from '../user/Login';
import Modal from 'react-modal';

export default class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regModalIsOpen: false,
      loginModalIsOpen: false
    }

    this.regOpenModal = this.regOpenModal.bind(this);
    this.regCloseModal = this.regCloseModal.bind(this);
    this.loginOpenModal = this.loginOpenModal.bind(this);
    this.loginCloseModal = this.loginCloseModal.bind(this);
    this.resetState = this.resetState.bind(this);
  }
  
  // reset state
  resetState() {
    this.setState({
      regModalIsOpen: false,
      loginModalIsOpen: false
    });
  }

  regOpenModal() {
    this.setState({ regModalIsOpen: true });
  }

  regCloseModal() {
    this.resetState();
  }

  loginOpenModal() {
    this.setState({ loginModalIsOpen: true });
  }

  loginCloseModal() {
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
      <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
        <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">Dashboard</a>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="btn btn-secondary" onClick={ this.regOpenModal }>Registration</button>
              <Modal
                isOpen={ this.state.regModalIsOpen }
                onRequestClose={ this.regCloseModal }
                style={ modalStyles }
                contentLabel="Reg Modal"
              >
                <h3 className="pl-0 d-flex modal-header">Registration: <i className="fa fa-times justify-content-right" onClick={ this.regCloseModal } /></h3>
                <RegForm close={ this.regCloseModal } />
              </Modal>
            </li>

            <li className="nav-item">
              <button className="btn btn-secondary" onClick={ this.loginOpenModal }>Login</button>
              <Modal
                isOpen={ this.state.loginModalIsOpen }
                onRequestClose={ this.loginCloseModal }
                style={ modalStyles }
                contentLabel="Reg Modal"
              >
                <h3 className="pl-0 d-flex modal-header">Login: <i className="fa fa-times justify-content-right" onClick={ this.loginCloseModal } /></h3>
                <LoginForm close={ this.loginCloseModal } />
              </Modal>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}
