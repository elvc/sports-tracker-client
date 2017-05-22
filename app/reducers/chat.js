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
      const roomForPost = state.rooms.find(room => room.id === action.message.room);
      const otherRooms = state.rooms.filter(room => room.id !== action.message.room);
      roomForPost.messages.push(action.message);
      const newState = {
        ...state,
        rooms: [
          ...otherRooms,
          roomForPost
        ]
      };
      return newState;
    }
    case 'SEND_MESSAGE': {
      const roomToUpdate = state.rooms.find(room => room.id === state.active);
      // const roomToUpdate = state.rooms[state.active];
      const otherRooms = state.rooms.filter(room => room !== roomToUpdate);
      roomToUpdate.input = '';
      return {
        ...state,
        rooms: [
          ...otherRooms,
          roomToUpdate
        ]
      };
    }
    case 'INPUT_CHANGE': {
      const roomToUpdate = state.rooms.find(room => room.id === state.active);

      // const roomToUpdate = state.rooms[state.active];
      const otherRooms = state.rooms.filter(room => room !== roomToUpdate);
      roomToUpdate.input = action.input;
      return {
        ...state,
        rooms: [
          ...otherRooms,
          roomToUpdate
        ]
      };
    }
    case 'CHANGE_ROOM': {
      return {
        ...state,
        active: action.roomId
      };
    }
    default:
      return state;
  }
}

export default chat;
