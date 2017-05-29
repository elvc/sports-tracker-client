const defaultState = {
  active: 0,
  rooms: []
};

function chat(state = defaultState, action) {
  switch (action.type) {
    case 'socket/JOIN_ROOM': {
      if (state.rooms.find(room => room.id === action.payload.room.id)) {
        return {
          ...state,
          active: action.payload.room.id
        };
      }
      return {
        ...state,
        rooms: [
          ...state.rooms,
          action.payload.room
        ],
        active: action.payload.room.id
      };
    }
    case 'RECEIVE_MESSAGE': {
      const roomForPost = state.rooms.find(room => room.id === action.room);
      const otherRooms = state.rooms.filter(room => room !== roomForPost);
      if (roomForPost.id !== state.active) {
        roomForPost.unread = true;
      }
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
    case 'socket/POST_MESSAGE': {
      const roomToUpdate = state.rooms.find(room => room.id === state.active);
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
      const roomToUpdate = state.rooms.find(room => room.id === action.roomId);
      const otherRooms = state.rooms.filter(room => room !== roomToUpdate);
      roomToUpdate.unread = false;
      return {
        ...state,
        rooms: [
          ...otherRooms,
          roomToUpdate
        ],
        active: action.roomId
      };
    }
    case 'UPDATE_USER_COUNT': {
      const roomToUpdate = state.rooms.find(room => room.id === action.room);
      const otherRooms = state.rooms.filter(room => room !== roomToUpdate);
      if (roomToUpdate === undefined) return state;
      roomToUpdate.onlineUsers = action.userCount;

      return {
        ...state,
        rooms: [
          ...otherRooms,
          roomToUpdate
        ]
      };
    }
    case 'socket/LEAVE_ROOM': {
      const otherRooms = state.rooms.filter(room => room.id !== action.payload.roomId);
      let activeRoom = 0;
      if (action.payload.roomId === state.active) {
        activeRoom = otherRooms.length ? otherRooms[0].id : 0;
      } else {
        activeRoom = state.active;
      }

      return {
        ...state,
        rooms: otherRooms,
        active: activeRoom
      };
    }
    default:
      return state;
  }
}

export default chat;
