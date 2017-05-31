import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validate from '../../form_validations/validate';

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
      passwordLengthValid: false
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
    // validate username and password input
    if ( key === 'username' ) {
      if ( event.target.value.length > 0 && event.target.value.length < 5) {
        $('.username-input').addClass('has-danger');
        $('.username-feedback').show();
        this.state.usernameLengthValid = false;
      } else {
        $('.username-input').removeClass('has-danger');
        $('.username-feedback').hide();
        this.state.usernameLengthValid = true;
      }
    }
    if (key === 'password') {
      if (event.target.value.length > 0 && event.target.value.length < 8) {
        $('.password-input').addClass('has-danger');
        $('.password-feedback').show();
        this.state.passwordLengthValid = false;
      } else {
        $('.password-input').removeClass('has-danger');
        $('.password-feedback').hide();
        this.state.passwordLengthValid = true;
      }
    }

    if (this.state.usernameLengthValid && this.state.passwordLengthValid) {
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
        Registration: <i className="fa fa-times justify-content-right" onClick={ this.props.close } />
        </h3>
        <form onSubmit={ this.handleSubmit } >
          <div className="username-input form-group row pr-3 pl-3">
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
          <div className="username-feedback form-control-feedback hide">The username requires a minimum of 5 characters</div>
          </div>
          <div className="email-input form-group row pl-3 pr-3">
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
          </div>
          <div className="password-input form-group row pl-3 pr-3">
            <label
              htmlFor="formPassword"
              className="col-form-label-sm"
            >
            Password: (minimum 8 characters)
          </label>
            <input
              id="formPassword"
              className="form-control"
              name="password"
              type="password"
              onChange={ this.handleKeyChange('password') }
              required
            />
          <div className="password-feedback form-control-feedback hide">Password requires a minimum of 8 characters</div>
          </div>
          <button id="reg-submit" className="btn btn-primary pull-right" disabled="disabled" type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}
