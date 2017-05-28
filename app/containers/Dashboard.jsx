import React from 'react';
import { connect } from 'react-redux';
import CardBox from '../components/cards/CardBox';
import { joinRoom, leaveRoom, postJoinRoom } from '../actions/chat';
import { togglePlayByPlay, removeCard, repositionCard } from '../actions/cards';
import { socketAction } from '../middlewares/websocket';

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
  removeCard,
  repositionCard,
  postJoinRoom: socketAction(postJoinRoom)
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
