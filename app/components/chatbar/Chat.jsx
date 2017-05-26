import React, { Component } from 'react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Message from './Message';
import MessageBox from './MessageBox';
import Rooms from './Rooms';
import * as actions from '../../actions/chat';

const SOCKET_HOST = location.origin.replace(/^http/, 'ws').replace('8081', '8080');
const socket = io.connect(SOCKET_HOST);

class Chat extends Component {
  static propTypes = {
    rooms: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    socket.on('post', msg => {
      props.receiveMessage(msg);
    });
    socket.on('user count', msg => {
      props.updateUserCount(msg);
    })

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onTabClick = this.onTabClick.bind(this);
    this.closeChat = this.closeChat.bind(this);
  }

  componentWillMount() {
    this.props.connectToSocket(socket);
  }

  componentDidUpdate() {
    const { socket, user, receiveMessage, updateUserCount } = this.props;

    // autoscroll to the latest message in message list
    const msgList = document.getElementById('messageList');
    if (msgList && msgList.scrollTop >= msgList.scrollHeight - 40 - msgList.clientHeight) {
      msgList.scrollTop = msgList.scrollHeight;
    }
  }

  handleSubmit(event, data) {
    const { socket, user, input, active, sendMessage, imputChange, changeRoom } = this.props;
    event.preventDefault();
    if (input !== '') {
      sendMessage();
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
    const { active, inputChange } = this.props;
    inputChange(event.target.value, active);
  }

  onTabClick(roomId) {
    this.props.changeRoom(roomId);
    document.getElementById('chat-input').focus();
  }

  closeChat(roomId) {
    const { socket, leaveRoom } = this.props;
    leaveRoom(roomId);
    socket.emit('leave', { room: roomId })
  }

  render() {
    const activeRoom = this.props.rooms.find(room => room.id === this.props.active);
    if (activeRoom) {
      const messages = activeRoom.messages;
      return (
        <CSSTransitionGroup
          transitionName="chatbar"
          transitionAppear={true}
          transitionAppearTimeout={ 500 }
          transitionEnter={ false }
          transitionLeave={ true }
          transitionLeaveTimeout={ 300 }
        >
          <div className="chat-container hidden-sm-down col-sm-3">
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
        </CSSTransitionGroup>
      );
    } else {
      return null;
    }
  }
}

export default Chat;
