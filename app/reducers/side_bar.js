const defaultState = {
  gamesNHL: [],
  gamesNFL: [],
  gamesMLB: [],
  gamesNBA: [],
  receivedAt: Date.now()
};

function sidebar(state = defaultState, action) {
  switch (action.type) {
    case 'RECEIVE_NHL': {
      return {
        ...state,
        gamesNHL: [...action.gamesNHL],
        receivedAt: action.receivedAt
      };
    }
    case 'RECEIVE_NBA': {
      return {
        ...state,
        gamesNBA: [...action.gamesNBA],
        receivedAt: action.receivedAt
      };
    }
    case 'RECEIVE_MLB': {
      return {
        ...state,
        gamesMLB: [...action.gamesMLB],
        receivedAt: action.receivedAt
      };
    }
    case 'RECEIVE_NFL': {
      return {
        ...state,
        gamesNFL: [...action.gamesNFL],
        receivedAt: action.receivedAt
      };
    }
    case 'REQUEST_FEEDS': {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}

export default sidebar;
