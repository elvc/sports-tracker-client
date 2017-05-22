import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import Chat from '../components/Chat';

const socketHost = process.env.SOCKET_HOST || 'http://localhost:8080';

const socket = io.connect(socketHost);

class ChatBar extends React.Component {

  componentDidMount() {
    // something
  }

  render() {
    return (
      <Chat { ...this.props } socket={ socket } />
    );
  }
}

function mapStateToProps(state) {
  const activeRoom = state.chat.rooms.find(room => room.id === state.chat.active);
  return {
    rooms: state.chat.rooms,
    active: state.chat.active,
    input: activeRoom.input
  };
}

export default connect(mapStateToProps)(ChatBar);
