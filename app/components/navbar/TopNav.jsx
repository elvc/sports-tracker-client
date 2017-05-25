import React, { Component } from 'react';
import RegForm from '../user/Reg';
import Modal from 'react-modal';

export default class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      username: '',
      email: '',
      password: ''
    }
    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.resetState = this.resetState.bind(this);
  }
  
  handleKeyChange = (key) => {
    return (event) => {
      this.setState({ [key]: event.target.value });
    }
  }

  handleSubmit = (e, message) => {
    e.preventDefault();

    let formData = {
    username: this.state.username,
    email: this.state.email,
    password: this.state.password,
    }

    // error checking
    if (formData.username.length < 1 || formData.email.length < 1 || formData.password.length < 1) {
      return false;
    }

    $.ajax({
      url: 'http://localhost:8080/register',
      dataType: 'json',
      type: 'POST',
      data: formData,
      success: (data) => {
       alert('Thank you for signing up');
      },
      error: (xhr, status, err) => {
       console.error(status, err.toString());
       alert('There was some problem with the form. Please resubmit');
      }
    });
  }
  
  // reset state
  resetState () {
    this.setState({
      username: '',
      email: '',
      password: '',
      modalIsOpen: false
    });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  closeModal() {
    this.resetState();
  }

  render() {
    const modalStyles = {
      content : {
        width: '700px',
        padding: '30px',
        top: '50%',
        left : '50%',
        right : 'auto',
        bottom : 'auto',
        marginRight : '-50%',
        transform : 'translate(-50%, -50%)'
      }
    };

    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
        <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Dashboard</a>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="btn btn-info" onClick={this.openModal}>Registration</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={modalStyles}
                contentLabel="Reg Modal"
              >
                <h3 className="pl-0 d-flex modal-header">Registration: <i className="fa fa-times justify-content-right" onClick={this.closeModal} /></h3>          
                <RegForm />
              </Modal> 
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
