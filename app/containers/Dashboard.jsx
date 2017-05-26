import React from 'react';
import { connect } from 'react-redux';
import CardBox from '../components/cards/CardBox';
import RegForm from '../components/user/Reg';
import { joinRoom, leaveRoom } from '../actions/chat';
import { togglePlayByPlay, removeCard } from '../actions/cards';

const Dashboard = props => (
  <CardBox { ...props } />
);

const mapStateToProps = state => ({
  allCards: state.cards,
  socket: state.chat.socket,
  chatActive: state.chat.active !== 0
});
const mapDispatchToProps = dispatch => ({
  joinRoom: (room) => {
    dispatch(joinRoom(room));
  },
  leaveRoom: (gameId) => {
    dispatch(leaveRoom(gameId));
  },
  togglePlayByPlay: (gameId) => {
    dispatch(togglePlayByPlay(gameId));
  },
  removeCard: (gameId) => {
    dispatch(removeCard(gameId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
