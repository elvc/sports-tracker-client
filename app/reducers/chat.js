const defaultState = {
  active: -1,
  rooms: []
};

function chat(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_ROOM':
      return {
        ...state,
        rooms: [
          ...state.rooms,
          action.room
        ]
      };
    default:
      return state;
  }
}

export default chat;
