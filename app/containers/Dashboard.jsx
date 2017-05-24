import React from 'react';
import { connect } from 'react-redux';
import CardBox from '../components/cards/CardBox';
import ChatBar from './ChatBar';
import { joinRoom, leaveRoom } from '../actions/chat';
import { togglePlayByPlay, removeCard } from '../actions/cards';

const Dashboard = props => (
  <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
    <section className="row">
      <CardBox { ...props } />
      <ChatBar />
    </section>
  </main>
);

const mapStateToProps = state => ({
  allCards: state.cards,
  socket: state.chat.socket
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
