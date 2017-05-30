import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShareForm extends Component {
  static propTypes = {
    close: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  handleKeyChange = (key) => {
    return (event) => { this.setState({ [key]: event.target.value }); }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email: this.state.email
    };

    const HOST = location.origin.replace('8081', '8080');

    const shareSuccess = {
      title: 'Sharing Successful',
      status: 'success',
      dismissible: true,
      dismissAfter: 2000
    };

    const shareError = {
      title: 'Problem with Share',
      message: 'Please try again',
      status: 'error',
      dismissible: true,
      dismissAfter: 2000
    };

    // error checking
    if (formData.email.length < 1) {
      return false;
    }

    // $.ajax({
    //   url: `${HOST}/login`,
    //   dataType: 'json',
    //   type: 'POST',
    //   data: formData,
    //   xhrFields: { withCredentials: true },
    //   success: (result) => {
    //     this.props.close();
    //     this.props.handleLoginSession(result.email);
    //     loginSuccess.message = `Logged in as ${result.email}`;
    //     this.props.notify(loginSuccess);
    //   },
    //   error: (err) => {
    //     this.props.close();
    //     loginError.message = `${err.responseJSON.message}`;
    //     this.props.notify(loginError);
    //   }
    // });

    // reset state after form submission
    this.setState({
      email: ''
    });
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="form-group row pr-3 pl-3">
          <label
            htmlFor="formEmail"
            className="col-form-label-sm"
          >
            Email:
          </label>
          <input
            id="formEmail"
            className="form-control"
            placeholder="user@example.com"
            name="email"
            type="email"
            onChange={ this.handleKeyChange('email') }
          />
        </div>
        <button className="btn btn-primary pull-right" type="submit">Share</button>
      </form>
    );
  }
}
