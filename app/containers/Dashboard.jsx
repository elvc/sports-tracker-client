import React from 'react';
import { connect } from 'react-redux';
import CardBox from '../components/cards/CardBox';
import { joinRoom } from '../actions/chat';
import { togglePlayByPlay } from '../actions/cards';

const Dashboard = props => (
  <CardBox { ...props } />
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
