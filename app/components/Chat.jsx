import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import MessageBox from './MessageBox';
import Rooms from './Rooms';
import * as actions from '../actions/chat';

class Chat extends Component {
  static propTypes = {
    rooms: PropTypes.array.isRequired,
    socket: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onTabClick = this.onTabClick.bind(this);

  }

  componentDidMount() {
    const { socket, user, dispatch } = this.props;
    socket.on('news', msg => console.log(msg));

    socket.emit('join', {
      room: 172,
      user: 'jeff'
    });
    socket.emit('join', {
      room: 27,
      user: 'jeff'
    });
    socket.emit('join', {
      room: 17,
      user: 'jeffrey'
    });
    socket.on('post', msg => {
      return dispatch(actions.receiveMessage(msg))
    });
    socket.on('new user', msg => {
      console.log('new user', msg);
    })
  }

  handleSubmit(event, data) {
    const { socket, user, dispatch, input, active } = this.props;
    event.preventDefault();
    if (input != '') {
      dispatch(actions.sendMessage());
      const message = {
        room: active,
        message: {
          user: 'Jeff',
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
  }

  render() {
    const activeRoom = this.props.rooms.find(room => room.id === this.props.active);
    const messages = activeRoom.messages;
    return (
      <div  className="chat-container hidden-md-down col-md-3">
        <Rooms
          rooms={ this.props.rooms }
          active={ this.props.active }
          onTabClick={ this.onTabClick }
        />
        <div className="message-list">
          <ul>
            { messages.map(message =>
              <Message
                key={ message.id }
                message={ message }
              />
            )}
          </ul>
        </div>
        <MessageBox
          input={ this.props.input }
          onChange={ this.onChange }
          handleSubmit={ this.handleSubmit }
        />
      </div>
    );
  }
}

export default Chat;
