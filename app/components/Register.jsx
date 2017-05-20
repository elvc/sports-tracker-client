import React, { Component } from 'react';

export default class Register extends Component {
  render() {
    // display registration form
    return (
      <div>
        <h3>Registration Form:</h3>
        <form>
          <div className="form-group row">
            <label htmlFor="username" className="col-2 col-form-label">Username</label>
            <div className="col-10">
              <input className="form-control" type="text" placeholder="username" id="username" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="email" className="col-2 col-form-label">Email</label>
            <div className="col-10">
              <input className="form-control" type="email" placeholder="user@example.com" id="email" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="password" className="col-2 col-form-label">Password</label>
            <div className="col-10">
              <input className="form-control" type="password" placeholder="hunter2" id="password" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="password-digest" className="col-2 col-form-label">Password Confirmation</label>
            <div className="col-10">
              <input className="form-control" type="password" placeholder="hunter2" id="password-digest" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}