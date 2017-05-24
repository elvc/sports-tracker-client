import React from 'react';
import { connect } from 'react-redux';
import CardBox from '../components/cards/CardBox';
import ChatBar from './ChatBar';
import { joinRoom } from '../actions/chat';
import { togglePlayByPlay } from '../actions/cards';

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
  togglePlayByPlay: (gameId) => {
    dispatch(togglePlayByPlay(gameId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
