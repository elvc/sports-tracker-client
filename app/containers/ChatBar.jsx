import React from 'react';
import { connect } from 'react-redux';
import Chat from '../components/chatbar/Chat';
import { socketAction } from '../middlewares/websocket';
import { inputChange, changeRoom, leaveRoom, postMessage } from '../actions/chat';

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
    user: state.user
  };
};

const mapDispatchToProps = {
  inputChange,
  changeRoom,
  leaveRoom: socketAction(leaveRoom),
  postMessage: socketAction(postMessage)
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBar);
