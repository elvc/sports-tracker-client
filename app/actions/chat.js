export const receiveMessage = message => ({
  type: 'RECEIVE_MESSAGE',
  message
});

export const sendMessage = () => ({
  type: 'SEND_MESSAGE'
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

export const updateUserCount = ({ room, userCount }) => ({
  type: 'UPDATE_USER_COUNT',
  room,
  userCount
});

export const leaveRoom = roomId => ({
  type: 'LEAVE_ROOM',
  roomId
});

export const postMessage = payload => ({
  type: 'POST_MESSAGE',
  payload
});

export const postLeaveRoom = roomId => ({
  type: 'POST_LEAVE_ROOM',
  payload: {
    roomId
  }
});

export const postJoinRoom = roomId => ({
  type: 'POST_JOIN_ROOM',
  payload: {
    roomId
  }
});

