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
      password: ''
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
        console.error('Looks like there was a problem with registration. Status Code:', response.status);
        return response.json();
      }
      response.json().then((data) => {
        this.props.close();
        this.props.login(data.username);
        regSuccess.message = `Logged in as ${data.username}`;
        this.props.notify(regSuccess);
      });
    })
    // handle status code !== 200
    .catch((err) => {
      console.error('A problem with registration. Error:', err);
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
              placeholder="Your username"
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
      </div>
    );
  }
}
