import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchCards from '../../lib/fetch_cards';

export default class LoginForm extends Component {
  static propTypes = {
    close: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    notify: PropTypes.func.isRequired,
    receiveCard: PropTypes.func.isRequired,
    receiveFavorites: PropTypes.func.isRequired,
    addCard: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  resetState = () => {
    this.setState({
      username: '',
      password: ''
    });
    $('#formUser').val('');
    $('#formPassword').val('');
  }

  handleKeyChange = key => (event) => {
    this.setState({ [key]: event.target.value });
  }

  handleSubmit = (e) => {
    const { notify, receiveCard, receiveFavorites, addCard, login, close } = this.props;

    e.preventDefault();

    const HOST = location.origin.replace('8081', '8080');

    const loginSuccess = {
      title: 'Welcome',
      status: 'success',
      dismissible: true,
      dismissAfter: 2000
    };

    const loginError = {
      title: 'Problem with Login',
      message: 'Please try again',
      status: 'error',
      dismissible: true,
      dismissAfter: 2000
    };

    fetch(`${HOST}/login`, {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then((response) => {
      if (response.status !== 200) {
        response.json().then((data) => {
          loginError.message = `${data.message}`;
          notify(loginError);
        });
      }
      return response.json();
    })
    .then((data) => {
      close();
      login(data.username, data.email);
      loginSuccess.message = `Logged in as ${data.username}`;
      fetchCards(addCard, receiveCard, receiveFavorites, notify);
      notify(loginSuccess);
    })
    .catch((err) => {
      loginError.message = `${err.message}`;
      this.props.notify(loginError);
    });
    this.resetState();
  };

  render() {
    return (
      <div>
        <h3 className="pl-0 d-flex modal-header">
        Login: <i className="fa fa-times justify-content-right" onClick={ this.props.close } />
        </h3>
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
              placeholder="Your username"
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
      </div>
    );
  }
}
