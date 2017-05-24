const defaultState = [];

function cards(state = defaultState, action) {
  switch (action.type) {
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
