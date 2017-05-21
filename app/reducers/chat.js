const defaultState = {
  active: -1,
  rooms: []
};

function chat(state = defaultState, action) {
  switch (action.type) {
    case 'JOIN_ROOM':
      return {
        ...state,
        rooms: [
          ...state.rooms,
          action.room
        ]
      };
    case 'RECEIVE_MESSAGE': {
      const roomForPost = state.rooms.filter(room => room.game === action.message.room);
      const otherRooms = state.rooms.filter(room => room.game !== action.message.room);
      roomForPost[0].messages.push(action.message);
      const newState = {
        ...state,
        rooms: [
          ...otherRooms,
          ...roomForPost
        ]
      };
      return newState;
    }
    case 'SEND_MESSAGE': {
      const roomToUpdate = state.rooms[state.active];
      roomToUpdate.input = '';
      return {
        ...state,
        rooms: [
          ...state.rooms,
          roomToUpdate
        ]
      };
    }
    case 'INPUT_CHANGE': {
      const roomToUpdate = state.rooms[state.active];
      roomToUpdate.input = action.input;
      return {
        ...state,
        rooms: [
          ...state.rooms,
          roomToUpdate
        ]
      };
    }
    default:
      return state;
  }
}

export default chat;
