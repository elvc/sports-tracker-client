import React from 'react';
import { connect } from 'react-redux';
import { addNotification as notify } from 'reapop';
import { receiveCard, addCard, receiveMLB, failedCardLoad, receiveNBA, receiveNHL, receiveNFL, showModal } from '../actions';
import GameList from '../components/sidebar/GameList';

const Sidebar = props => (
  <GameList { ...props } />
);

const mapStateToProps = state => ({
  leagues: [{
    name: 'NHL',
    data: state.sidebar.gamesNHL
  }, {
    name: 'NFL',
    data: state.sidebar.gamesNFL
  }, {
    name: 'NBA',
    data: state.sidebar.gamesNBA
  }, {
    name: 'MLB',
    data: state.sidebar.gamesMLB
  }],
  favoriteGames: state.sidebar.favoriteGames,
  username: state.user.name,
  receivedAt: state.sidebar.receivedAt
});

const mapDispatchToProps = {
  receiveMLB,
  receiveNBA,
  receiveNHL,
  receiveNFL,
  receiveCard,
  notify,
  addCard,
  failedCardLoad,
  showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
