export const receiveMessage = message => ({
  type: 'RECEIVE_MESSAGE',
  message
});

export const sendMessage = message => ({
  type: 'SEND_MESSAGE',
  message
});

export const inputChange = input => ({
  type: 'INPUT_CHANGE',
  input
});

export const joinRoom = room => ({
  type: 'JOIN_ROOM',
  room
});
