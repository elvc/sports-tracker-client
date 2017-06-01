import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as teamLists from '../../lib/teamLists';

export default class FavoriteForm extends Component {
  static propTypes = {
    close: PropTypes.func.isRequired,
    notify: PropTypes.func.isRequired,
    receiveFavorites: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      league: '',
      team: ''
    };
  }

  resetState = () => {
    this.setState({
      league: '',
      team: ''
    });
    $('#form-league').val('');
    $('#form-team').val('');
  }

  handleInputChange = key => (event) => {
    this.setState({ [key]: event.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const HOST = location.origin.replace('8081', '8080');

    const favoriteSuccess = {
      title: 'Added favorite',
      status: 'success',
      dismissible: true,
      dismissAfter: 2000
    };

    const favoriteError = {
      title: 'Problem with Login',
      message: 'Please try again',
      status: 'error',
      dismissible: true,
      dismissAfter: 2000
    };
    const team = this.state.team;

    fetch(`${HOST}/users/favorite`, {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        username: this.props.username,
        team
      })
    })
    .then((response) => {
      if (response.status !== 200) {
        response.json().then((data) => {
          favoriteError.message = `${data.message}`;
          this.props.notify(favoriteError);
        });
      }
      return response.json();
    })
    .then((data) => {
      this.props.close();
      this.props.receiveFavorites(data.games);
      favoriteSuccess.message = 'Team added to favorites';
      this.props.notify(favoriteSuccess);
    })
    .catch((err) => {
      favoriteError.message = `${err.message}`;
      this.props.notify(favoriteError);
    });
    this.resetState();
  };


  render() {
    let teams;
    switch (this.state.league) {
      case 'NBA':
        teams = teamLists.NBA;
        break;
      case 'MLB':
        teams = teamLists.MLB;
        break;
      case 'NHL':
        teams = teamLists.NHL;
        break;
      default:
        teams = {};
    }
    return (
      <div>
        <h3 className="pl-0 d-flex modal-header">
          Add a favorite team: <i
            className="fa fa-times justify-content-right"
            onClick={ this.props.close }
            role="button"
            tabIndex={ 0 }
          />
        </h3>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group row pr-3 pl-3">
            <label
              htmlFor="form-league"
              className="col-form-label-sm"
            >
              League:
          </label>
            <select
              value={ this.state.league }
              className="form-control"
              id="form-league"
              onChange={ this.handleInputChange('league') }
            >
              <option disabled value="">Select a league</option>
              <option value="NHL">NHL</option>
              <option value="NBA">NBA</option>
              <option value="MLB">MLB</option>
            </select>
          </div>
          <div className="form-group row pl-3 pr-3">
            <label
              htmlFor="form-league"
              className="col-form-label-sm"
            >
              Team:
          </label>
            <select
              value={ this.state.team }
              className="form-control"
              id="form-league"
              onChange={ this.handleInputChange('team') }
            >
              <option disabled value="">Select a team</option>
              { Object.keys(teams).map(teamId => (
                <option key={ teamId } value={ teamId }>{ teams[teamId] }</option>
              ))}
            </select>
          </div>
          <button className="btn btn-primary pull-right" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
