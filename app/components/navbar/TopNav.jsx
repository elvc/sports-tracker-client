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
      type: 'GET',
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
      <nav className="topnav navbar navbar-toggleable-sm navbar-inverse fixed-top bg-inverse">
        <button className="navbar-toggler navbar-toggler-right hidden-md-up" type="button" data-toggle="collapse" data-target="#topnavbar" aria-controls="topnavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <a className="navbar-brand" href="/">Sports Score Board</a>

        <button className="navbar-toggler navbar-toggler-left hidden-md-up" type="button" data-toggle="collapse" data-target="#collapseLeagueItem" aria-controls="collapseLeagueItem" aria-expanded="false" aria-label="Toggle sidebar">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="topnavbar">

          { isLoggedIn ? (<LogoutButton handleLogoutSession={ this.handleLogoutSession }/>) : (<LoginRegButton handleLoginSession={ this.handleLoginSession } />) }

        </div>

      </nav>
    );
  }
}

