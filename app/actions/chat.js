export const receiveMessage = message => ({
  type: 'RECEIVE_MESSAGE',
  message
});

export const sendMessage = message => ({
  type: 'SEND_MESSAGE',
  message
});

export const inputChange = (input, roomId) => ({
  type: 'INPUT_CHANGE',
  input,
  roomId
});

export const joinRoom = room => ({
  type: 'JOIN_ROOM',
  room
});

export const changeRoom = roomId => ({
  type: 'CHANGE_ROOM',
  roomId
});
