import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
  static propTypes = {
    close: PropTypes.func.isRequired,
    handleLoginSession: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleKeyChange = (key) => {
    return (event) => {
      this.setState({ [key]: event.target.value });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      username: this.state.username,
      password: this.state.password,
    }

    // error checking
    if (formData.username.length < 1 || formData.password.length < 1) {
      return false;
    }

    $.ajax({
      url: 'http://localhost:8080/login',
      dataType: 'json',
      type: 'POST',
      data: formData,
      xhrFields: { withCredentials: true },
      success: (result) => {
        this.props.close();
        this.props.handleLoginSession(result.username);
        alert('Logged in');
      },
      error: (err) => {
        console.error(err);
        alert('There was some problem. Please resubmit');
      }
    });

    // reset state after form submission
    this.setState({
      username: '',
      password: ''
    });
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
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
            type="text"
            onChange={ this.handleKeyChange('username') }
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
        <button className="btn btn-primary pull-right" type="submit">Login</button>
      </form>
    );
  }
}
