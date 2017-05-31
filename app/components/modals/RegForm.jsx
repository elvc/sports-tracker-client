import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RegForm extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    notify: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      usernameLengthValid: false,
      passwordLengthValid: false,
      emailValid: false
    };
  }

  resetState = () => {
    this.setState({
      username: '',
      password: ''
    });
    $('#formUser').val('');
    $('#formEmail').val('');
    $('#formPassword').val('');
  }

  handleKeyChange = key => (event) => {
    this.setState({ [key]: event.target.value });
    // validate username, email, and password input
    if (key === 'username') {
      // alphanumeric
      const pass = /^\w{5}/.test(event.target.value);

      if (!pass) {
        $('.username-input').addClass('has-danger');
        $('.username-feedback').show();
        $('.username-warning-placeholder').hide();
        this.state.usernameLengthValid = false;
      } else {
        $('.username-input').removeClass('has-danger');
        $('.username-feedback').hide();
        $('.username-warning-placeholder').show();
        this.state.usernameLengthValid = true;
      }
    }
    if (key === 'email') {
      const pass = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(event.target.value);

      if(!pass) {
        $('.email-input').addClass('has-danger');
        $('.email-feedback').show();
        $('.email-warning-placeholder').hide();
        this.state.emailValid = false;
      } else {
        $('.email-input').removeClass('has-danger');
        $('.email-feedback').hide();
        $('.email-warning-placeholder').show();
        this.state.emailValid = true;
      }
    }
    if (key === 'password') {
      const pass = /^\w{8}/.test(event.target.value);

      if (!pass) {
        $('.password-input').addClass('has-danger');
        $('.password-feedback').show();
        $('.password-warning-placeholder').hide();
        this.state.passwordLengthValid = false;
      } else {
        $('.password-input').removeClass('has-danger');
        $('.password-feedback').hide();
        $('.password-warning-placeholder').show();
        this.state.passwordLengthValid = true;
      }
    }

    // cannot submit form unless all inputs are valid
    if (this.state.usernameLengthValid && this.state.emailValid && this.state.passwordLengthValid) {
      $('#reg-submit').prop('disabled', false);
    } else {
      $('#reg-submit').prop('disabled', true);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const HOST = location.origin.replace('8081', '8080');

    const regSuccess = {
      title: 'Welcome',
      status: 'success',
      dismissible: true,
      dismissAfter: 3000
    };

    const regError = {
      title: 'Error with Registration',
      message: 'Please try again',
      status: 'error',
      dismissible: true,
      dismissAfter: 3000
    };

    fetch(`${HOST}/register`, {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((response) => {
      if (response.status !== 200) {
        response.json().then((data) => {
          regError.message = `${data.message}`;
          this.props.notify(regError);
        });
      }
      return response.json();
    })
    .then((data) => {
      this.props.close();
      this.props.login(data.username);
      regSuccess.message = `Logged in as ${data.username}`;
      this.props.notify(regSuccess);
    })
    .catch((err) => {
      regError.message = `${err.message}`;
      this.props.notify(regError);
    });
    this.resetState();
  };

  render() {
    return (
      <div>
        <h3 className="pl-0 d-flex modal-header">
        Registration: <i className="fa fa-times justify-content-right"onClick={ this.props.close } />
        </h3>
        <form onSubmit={ this.handleSubmit } >
          <div className="username-input form-group row pr-3 pl-3 mb-0">
            <label
              htmlFor="formUser"
              className="col-form-label-sm"
            >
            User Name: (minimum 5 characters)
            </label>
            <input
              id="formUser"
              className="form-control"
              name="username"
              placeholder="Your username"
              type="text"
              onChange={ this.handleKeyChange('username') }
              required
            />
            <div className="username-warning-placeholder">&nbsp;</div>
            <div className="username-feedback form-control-feedback hide">The username requires a minimum of 5 characters</div>
          </div>
          <div className="email-input form-group row pl-3 pr-3 mb-0">
            <label
              htmlFor="formEmail"
              className="col-form-label-sm"
            >
            Email:
            </label>
            <input
              id="formEmail"
              className="form-control form-control-warning"
              name="email"
              placeholder="user@example.com"
              type="email"
              onChange={ this.handleKeyChange('email') }
              required
              minLength="5"
            />
          <div className="email-warning-placeholder">&nbsp;</div>
            <div className="email-feedback form-control-feedback hide">A valid email address is required</div>
          </div>
          <div className="password-input form-group row pl-3 pr-3 mb-0">
            <label
              htmlFor="formPassword"
              className="col-form-label-sm"
            >
            Password: (minimum 8 characters)
            <span className="password-warning-placeholder" />
            </label>
            <input
              id="formPassword"
              className="form-control"
              name="password"
              type="password"
              onChange={ this.handleKeyChange('password') }
              required
            />
            <div className="password-warning-placeholder">&nbsp;</div>
            <div className="password-feedback form-control-feedback hide">Password requires a minimum of 8 characters</div>
          </div>
          <button id="reg-submit" className="btn btn-primary pull-right" disabled="disabled" type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}
