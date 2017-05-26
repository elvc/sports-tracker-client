const defaultState = {
  allCards: []
};

function cards(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_CARD':
      if (state.find(card => card.gameId === action.game.gameId)) {
        return [...state];
      }
      return  [...state, action.game];
    case 'TOGGLE_PLAY_BY_PLAY': {
      return state.map((card) => {
        if (card.gameId === action.gameId) {
          return {
            ...card,
            displayPlayByPlay: !card.displayPlayByPlay
          };
        }
        return card;
      });
    }
    case 'REMOVE_CARD': {
      return state.filter(card => card.gameId !== action.gameId);
    }
    default:
      return state;
  }
}

export default cards;
