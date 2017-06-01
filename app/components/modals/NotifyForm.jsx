import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NotifyForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: props.email
    };
  }

  handleKeyChange = () => (event) => { this.setState({ email: event.target.value }); }

  handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email: this.state.email,
      awayTeam: this.props.awayTeam,
      homeTeam: this.props.homeTeam,
      date: this.props.date,
      startTime: this.props.startTime
    };

    const HOST = location.origin.replace('8081', '8080');

    const notifySuccess = {
      title: 'Notification will be sent',
      status: 'success',
      dismissible: true,
      dismissAfter: 4000
    };

    const notifyError = {
      title: 'Problem with notification',
      message: 'Please try again',
      status: 'error',
      dismissible: true,
      dismissAfter: 4000
    };

    // error checking
    if (formData.email.length < 1) {
      return false;
    }

    $.ajax({
      url: `${HOST}/notify-me`,
      dataType: 'json',
      type: 'POST',
      data: formData,
      xhrFields: { withCredentials: true },
      success: (result) => {
        this.props.close();
        notifySuccess.message = `Email will be sent to: ${result.email} 45 minutes before game starts`;
        this.props.notify(notifySuccess);
      },
      error: (err) => {
        this.props.close();
        notifyError.message = `${err.responseJSON.message}`;
        this.props.notify(notifyError);
      }
    });

    // reset state after form submission
    this.setState({
      email: ''
    });
  };

  render() {
    return (
      <div>
        <h3 className="pl-0 d-flex modal-header">
          Your email address: <i className="fa fa-times justify-content-right" onClick={ this.props.close } />
        </h3>
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
              value={ this.state.email }
              name="email"
              type="email"
              onChange={ this.handleKeyChange('email') }
            />
          </div>
          <button className="btn btn-primary pull-right" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

NotifyForm.defaultProps = {
  startTime: ''
}

NotifyForm.propTypes = {
  close: PropTypes.func.isRequired,
  awayTeam: PropTypes.string.isRequired,
  homeTeam: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  startTime: PropTypes.string,
  notify: PropTypes.func.isRequired
};
