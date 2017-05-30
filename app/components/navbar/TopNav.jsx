import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginRegButton from '../user/LoginRegButton';
import LogoutButton from '../user/LogoutButton';

export default class TopNav extends Component {

  // check for sessions on page refresh
  componentDidMount() {
    const HOST = location.origin.replace('8081', '8080');

    $.ajax({
      url: `${HOST}/checkifloggedin`,
      dataType: 'json',
      type: 'GET',
      xhrFields: { withCredentials: true },
      success: (result) => {
        this.props.login(result.username);
      }
    });
  }

  render() {
    const { username, login, logout, notify, receiveCard, showModal } = this.props;

    return (
      <nav className="topnav navbar navbar-toggleable-sm navbar-inverse fixed-top bg-inverse">
        <button
          className="navbar-toggler navbar-toggler-right hidden-md-up"
          type="button"
          data-toggle="collapse"
          data-target="#topnavbar"
          aria-controls="topnavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="user-icon"><i className="fa fa-user-o" aria-hidden="true" /></span>
        </button>

        <a className="navbar-brand" href="/">Sports Score Board</a>

        <button
          className="navbar-toggler navbar-toggler-left hidden-md-up"
          type="button"
          data-toggle="collapse"
          data-target="#collapseLeagueItem"
          aria-controls="collapseLeagueItem"
          aria-expanded="false"
          aria-label="Toggle sidebar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="topnavbar">

          { username ? (
            <LogoutButton notify={ notify } handleLogoutSession={ logout } user={ username } />
          ) : (
            <LoginRegButton
              handleLoginSession={ login }
              notify={ notify }
              receiveCard={ receiveCard }
              showModal={ showModal }
            />
          ) }

        </div>

      </nav>
    );
  }
}

TopNav.defaultProps = {
  username: false
};

TopNav.propTypes = {
  username: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  notify: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  receiveCard: PropTypes.func.isRequired
}
;
