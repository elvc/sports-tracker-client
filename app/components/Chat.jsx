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

  }

  componentDidMount() {
    const { socket, user, dispatch } = this.props;
    socket.on('news', msg => console.log(msg));

    socket.emit('join', {
      room: 'test',
      user: 'jeff'
    });
    socket.on('post', msg => {
      return dispatch(actions.receiveMessage(msg))
    });
    socket.on('new user', msg => {
      console.log('new user', msg);
    })
  }

  handleSubmit(event, data) {
    const { socket, user, dispatch, input } = this.props;
    event.preventDefault();
    if (input != '') {
      dispatch(actions.sendMessage());
      const message = {
        room: 'test',
        message: {
          user: 'Jeff',
          content: input
        }
      }
      socket.emit('post', message);
    }
  }

  onChange(event) {
    const { socket, user, dispatch } = this.props;
    dispatch(actions.inputChange(event.target.value))
  }

  render() {
    const messages = this.props.rooms[this.props.active].messages;
    return (
      <div>
        <Rooms />
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
