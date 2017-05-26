import React from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Chat from '../components/chatbar/Chat';
import * as actions from '../actions/chat';

const ChatBar = props => (
  <Chat { ...props } />
);

const mapStateToProps = (state) => {
  const activeRoom = state.chat.rooms.find(room => room.id === state.chat.active);
  const input = activeRoom ? activeRoom.input : '';
  return {
    rooms: state.chat.rooms,
    active: state.chat.active,
    input,
    user: state.user,
    socket: state.chat.socket
  };
};

const mapDispatchToProps = dispatch => ({
  getSocket: (socket) => {
    dispatch(actions.getSocket(socket));
  },
  receiveMessage: (msg) => {
    dispatch(actions.receiveMessage(msg));
  },
  updateUserCount: (msg) => {
    dispatch(actions.updateUserCount(msg));
  },
  sendMessage: () => {
    dispatch(actions.sendMessage());
  },
  inputChange: (value, room) => {
    dispatch(actions.inputChange(value, room));
  },
  changeRoom: (roomId) => {
    dispatch(actions.changeRoom(roomId));
  },
  leaveRoom: (roomId) => {
    dispatch(actions.leaveRoom(roomId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatBar);
