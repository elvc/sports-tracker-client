import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Message from './Message';
import MessageBox from './MessageBox';
import Rooms from './Rooms';

class Chat extends Component {
  static propTypes = {
    rooms: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    sendMessage: PropTypes.func.isRequired,
    postMessage: PropTypes.func.isRequired,
    postLeaveRoom: PropTypes.func.isRequired,
    inputChange: PropTypes.func.isRequired,
    changeRoom: PropTypes.func.isRequired,
    leaveRoom: PropTypes.func.isRequired,
    user: PropTypes.shape({}).isRequired,
    input: PropTypes.string.isRequired,
    active: PropTypes.number.isRequired
  };

  componentDidUpdate() {
    // autoscroll to the latest message in message list
    const msgList = document.getElementById('messageList');
    if (msgList && msgList.scrollTop >= msgList.scrollHeight - 40 - msgList.clientHeight) {
      msgList.scrollTop = msgList.scrollHeight;
    }
  }

  onChange = (event) => {
    const { active, inputChange } = this.props;
    inputChange(event.target.value, active);
  }

  onTabClick = (roomId) => {
    this.props.changeRoom(roomId);
    document.getElementById('chat-input').focus();
  }

  handleSubmit = (event) => {
    const { user, input, active, sendMessage, postMessage } = this.props;
    event.preventDefault();
    if (input !== '') {
      sendMessage();
      const message = {
        room: active,
        message: {
          user,
          content: input
        }
      };
      postMessage(message);
    }
  }

  closeChat = (roomId) => {
    const { leaveRoom, postLeaveRoom } = this.props;
    leaveRoom(roomId);
    postLeaveRoom(roomId);
  }

  render() {
    const activeRoom = this.props.rooms.find(room => room.id === this.props.active);

    return (
      <CSSTransitionGroup
        transitionName="chatbar"
        transitionLeave
        transitionEnterTimeout={ 700 }
        transitionLeaveTimeout={ 300 }
      >
        { activeRoom &&
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

          <div className="message-list" id="messageList">
            <div>
              { activeRoom.messages.map(message =>
                  (<Message
                    key={ message.id }
                    message={ message }
                  />)
                )}
            </div>
          </div>

          <MessageBox
            input={ this.props.input }
            onChange={ this.onChange }
            handleSubmit={ this.handleSubmit }
          />
        </div>
        }
      </CSSTransitionGroup>
    );
  }
}

export default Chat;
