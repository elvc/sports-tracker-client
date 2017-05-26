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
const mapDispatchToProps = {
  joinRoom,
  leaveRoom,
  togglePlayByPlay,
  removeCard
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
