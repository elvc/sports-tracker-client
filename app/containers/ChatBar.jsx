import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import Chat from '../components/chatbar/Chat';

const SOCKET_HOST = location.origin.replace(/^http/, 'ws').replace('8081', '8080');

const socket = io.connect(SOCKET_HOST);

const ChatBar = props => (
  <Chat { ...props } socket={ socket } />
);

function mapStateToProps(state) {
  const activeRoom = state.chat.rooms.find(room => room.id === state.chat.active);
  const input = activeRoom ? activeRoom.input : '';
  return {
    rooms: state.chat.rooms,
    active: state.chat.active,
    input,
    user: state.user
  };
}

export default connect(mapStateToProps)(ChatBar);
