import React from 'react';
import { connect } from 'react-redux';
import Chat from '../components/chatbar/Chat';
// import * as actions from '../actions/chat';
import { socketAction } from '../middlewares/websocket';
import { sendMessage, inputChange, changeRoom, leaveRoom, postLeaveRoom, postMessage } from '../actions/chat';

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
  sendMessage,
  inputChange,
  changeRoom,
  leaveRoom,
  postLeaveRoom: socketAction(postLeaveRoom),
  postMessage: socketAction(postMessage)
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBar);
