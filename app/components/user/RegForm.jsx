import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RegForm extends Component {
  static propTypes = {
    handleLoginSession: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  handleKeyChange = (key) => {
    return (event) => {
      this.setState({ [key]: event.target.value });
    }
  }

  handleSubmit = (e, message) => {
    e.preventDefault();

    const formData = {
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
      xhrFields: { withCredentials: true },
      success: (data) => {
        this.props.close();
        this.props.handleLoginSession(data.username);
        alert('Registration successful');
      },
      error: (err) => {
        console.error('Error', err);
        alert('There was some problem with the form. Please resubmit');
      }
    });

    // reset state after form submission
    this.setState({
      username: '',
      email: '',
      password: ''
    });
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit } >
        <div className="form-group row pr-3 pl-3">
          <label
            htmlFor="formUser"
            className="col-form-label-sm"
          >
            User Name:
          </label>
          <input
            id="formUser"
            className="form-control"
            name="username"
            placeholder="username"
            type="text"
            onChange={ this.handleKeyChange('username') }
          />
        </div>
        <div className="form-group row pl-3 pr-3">
          <label
            htmlFor="formEmail"
            className="col-form-label-sm"
          >
            Email:
          </label>
          <input
            id="formEmail"
            className="form-control"
            name="email"
            placeholder="user@example.com"
            type="email"
            onChange={ this.handleKeyChange('email') }
          />
        </div>
        <div className="form-group row pl-3 pr-3">
          <label
            htmlFor="formPassword"
            className="col-form-label-sm"
          >
            Password:
          </label>
          <input
            id="formPassword"
            className="form-control"
            name="password"
            type="password"
            onChange={ this.handleKeyChange('password') }
          />
        </div>
        <button className="btn btn-primary pull-right" type="submit">Sign up</button>
      </form>
    );
  }
}
