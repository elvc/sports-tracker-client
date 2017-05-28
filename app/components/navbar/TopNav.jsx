import React, { Component } from 'react';
import LoginRegButton from '../user/LoginRegButton';
import LogoutButton from '../user/LogoutButton';

export default class TopNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      loggedInAs: ''
    }
  }

  // check for sessions on page refresh
  componentDidMount(){
    $.ajax({
      url: '/checkifloggedin',
      dataType: 'json',
      type: 'GET',
      xhrFields: { withCredentials: true },
      success: (result) => {
        this.setState({
          isLoggedIn: result.isLoggedIn,
          loggedInAs: result.username
        });
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  handleLoginSession = (user) => {
    this.setState({
      isLoggedIn: true,
      loggedInAs: user
     });
  }

  handleLogoutSession = () => {
    this.setState({
      isLoggedIn: false,
      loggedInAs: ''
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <nav className="topnav navbar navbar-toggleable-sm navbar-inverse fixed-top bg-inverse">
        <button className="navbar-toggler navbar-toggler-right hidden-md-up" type="button" data-toggle="collapse" data-target="#topnavbar" aria-controls="topnavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="user-icon"><i className="fa fa-user-o" aria-hidden="true"></i></span>
        </button>

        <a className="navbar-brand" href="/">Sports Score Board</a>

        <button className="navbar-toggler navbar-toggler-left hidden-md-up" type="button" data-toggle="collapse" data-target="#collapseLeagueItem" aria-controls="collapseLeagueItem" aria-expanded="false" aria-label="Toggle sidebar">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="topnavbar">

          { isLoggedIn ? (<LogoutButton handleLogoutSession={ this.handleLogoutSession } user={ this.state.loggedInAs } />) : (<LoginRegButton handleLoginSession={ this.handleLoginSession } />) }

        </div>

      </nav>
    );
  }
}
