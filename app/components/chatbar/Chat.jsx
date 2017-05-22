import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import MessageBox from './MessageBox';
import Rooms from './Rooms';
import * as actions from '../../actions/chat';

class Chat extends Component {
  static propTypes = {
    rooms: PropTypes.array.isRequired,
    socket: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onTabClick = this.onTabClick.bind(this);
    this.closeChat = this.closeChat.bind(this);
  }

  componentDidMount() {
    const { socket, user, dispatch } = this.props;

    // test code to join manually created rooms
    socket.emit('join', {
      room: 172,
      user: user
    });
    socket.emit('join', {
      room: 27,
      user: user
    });
    socket.emit('join', {
      room: 17,
      user: user
    });

    socket.on('post', msg => {
      return dispatch(actions.receiveMessage(msg))
    });
    socket.on('user count', msg => {
      dispatch(actions.updateUserCount(msg));
    })
  }

  componentDidUpdate() {
    // autoscroll to the latest message in message list
    const msgList = document.getElementById('messageList');
    if (msgList && msgList.scrollTop === msgList.scrollHeight - 30 - msgList.clientHeight) {
      msgList.scrollTop = msgList.scrollHeight;
    }
  }

  joinChat(id, name) {
    const { socket, dispatch } = this.props;
    const room = {
      name,
      id,
      messages: [],
      onlineUsers: 0,
      input: '',
      unread: false
    };
    socket.emit('join', { room: id });
    dispatch(actions.joinRoom(room));
  }

  handleSubmit(event, data) {
    const { socket, user, dispatch, input, active } = this.props;
    event.preventDefault();
    if (input !== '') {
      dispatch(actions.sendMessage());
      const message = {
        room: active,
        message: {
          user: user,
          content: input
        }
      }
      socket.emit('post', message);
    }
  }

  onChange(event) {
    const { dispatch, active } = this.props;
    dispatch(actions.inputChange(event.target.value, active))
  }

  onTabClick(roomId) {
    const { dispatch } = this.props;
    dispatch(actions.changeRoom(roomId));
    document.getElementById('chat-input').focus();
  }

  closeChat(roomId) {
    const { dispatch, socket } = this.props;
    dispatch(actions.leaveRoom(roomId));
    socket.emit('leave', { room: roomId })
  }

  render() {
    const activeRoom = this.props.rooms.find(room => room.id === this.props.active);
    if (activeRoom) {
      const messages = activeRoom.messages;
      return (
        <div  className="chat-container hidden-md-down col-md-3">

          <Rooms
            rooms={ this.props.rooms }
            active={ this.props.active }
            onTabClick={ this.onTabClick }
            closeChat={ this.closeChat }
          />

          <div className="user-count">
            { activeRoom.onlineUsers } { activeRoom.onlineUsers > 1 ? 'people' : 'person' } chatting
          </div>

          <div className="message-list" id='messageList'>
            <div>
              { messages.map(message =>
                <Message
                  key={ message.id }
                  message={ message }
                />
              )}
            </div>
          </div>

          <MessageBox
            input={ this.props.input }
            onChange={ this.onChange }
            handleSubmit={ this.handleSubmit }
          />

        </div>
      );
    } else {
      return null;
    }
  }
}

export default Chat;
