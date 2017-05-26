import React, { Component } from 'react';
import LoginRegButton from '../user/LoginRegButton';
import LogoutButton from '../user/LogoutButton';

export default class TopNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }
  }
  
  // check for sessions on page refresh
  componentDidMount(){
    $.ajax({
      url: 'http://localhost:8080/checkifloggedin',
      dataType: 'json',
      type: 'POST',
      xhrFields: { withCredentials: true },
      success: (result) => {
        this.setState({isLoggedIn: result.isLoggedIn});
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  // reset state
  resetState = () => {
    this.setState({
      isLoggedIn: false
    });
  }

  handleLoginSession = () => {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutSession = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <nav className="topnav navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
        <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">Dashboard</a>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">

            { isLoggedIn ? (<LogoutButton handleLogoutSession={this.handleLogoutSession}/>) : (<LoginRegButton handleLoginSession={this.handleLoginSession} />) }

        </div>
      </nav>
    );
  }
}

