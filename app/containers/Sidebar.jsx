import React from 'react';
import { connect } from 'react-redux';
import { addNotification as notify } from 'reapop';
import { receiveMLB, receiveNBA, receiveNHL, receiveNFL } from '../actions/api';
import { receiveCard } from '../actions/card';
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
  receivedAt: state.sidebar.receivedAt
});

const mapDispatchToProps = {
  receiveMLB,
  receiveNBA,
  receiveNHL,
  receiveNFL,
  receiveCard,
  notify
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
