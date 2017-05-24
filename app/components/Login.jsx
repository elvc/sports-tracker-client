import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    // display login form
    return (
      <div>
        <h3>Login:</h3>
        <form action="/login" method="post">
          <div className="form-group row">
            <label htmlFor="username" className="col-2 col-form-label">Username</label>
            <div className="col-10">
              <input className="form-control" type="text" placeholder="username" id="username" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="password" className="col-2 col-form-label">Password</label>
            <div className="col-10">
              <input className="form-control" type="password" placeholder="1111111111" id="password" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
    );
  }
}
