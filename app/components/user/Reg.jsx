import React, { Component } from 'react';

export default class RegForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    console.log('formData', formData);
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

    // reset state after form submission
    this.setState({
      username: '',
      email: '',
      password: '',
    });
  };

  render() {

    return (

      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label className="col-2 col-form-label-sm">
            User Name:
          </label>
          <input id="formUser" className="form-control col-sm-6" name='username' type="text"
            onChange={this.handleKeyChange('username')} />
        </div>
        <div className="form-group row">
          <label className="col-2 col-form-label-sm">
            Email:
          </label>
          <input id="formEmail" className="form-control col-sm-6" name='email' type="email" id="email"
            onChange={this.handleKeyChange('email')} />
        </div>
        <div className="form-group row">
          <label className="col-2 col-form-label-sm">
            Password:
          </label>
          <input id="formPassword" className="form-control col-sm-6" name='password' type="password" id="password"
            onChange={this.handleKeyChange('password')} />
        </div>
        <div className="form-group row">
          <label className="col-2 col-form-label-sm">
            Password Confirmation:
          </label>
          <input className="form-control col-sm-6" type="password" name='password' id="password-digest" />
        </div>
        <button className="btn btn-primary" type="submit">Sign up</button>
      </form>
    );
  }
}
