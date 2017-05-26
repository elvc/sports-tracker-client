import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
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
      password: this.state.password,
    }

    // error checking
    if (formData.username.length < 1 || formData.password.length < 1) {
      return false;
    }
    console.log(formData);
    $.ajax({
      url: 'http://localhost:8080/login',
      dataType: 'json',
      type: 'POST',
      data: formData,
      success: (result) => {
        this.props.close();
        alert('Logged in');
      },
      error: (xhr, status, err) => {
        console.error(status, err);
        alert('There was some problem with the form. Please resubmit');
      }
    });

    // reset state after form submission
    this.setState({
      username: '',
      password: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row pr-3 pl-3">
          <label className="col-form-label-sm">
            User Name:
          </label>
          <input id="formUser" className="form-control" name='username' type="text"
            onChange={ this.handleKeyChange('username') } />
        </div>
        <div className="form-group row pl-3 pr-3">
          <label className="col-form-label-sm">
            Password:
          </label>
          <input id="formPassword" className="form-control" name='password' type="password" id="password"
            onChange={ this.handleKeyChange('password') } />
        </div>
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    );
  }
}
