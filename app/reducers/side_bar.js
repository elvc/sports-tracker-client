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
    case 'RECEIVE_FAVORITES': {
      const newGames = action.games.filter(game => !state.favoriteGames.find(stateGame => stateGame.gameId === game.gameId));
      return {
        ...state,
        favoriteGames: [
          ...state.favoriteGames,
          ...newGames
        ]
      };
    }
    case 'REQUEST_FEEDS': {
      return {
        ...state
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        favoriteGames: []
      };
    }
    default:
      return state;
  }
}

export default sidebar;
