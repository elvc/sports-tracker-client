export const togglePlayByPlay = gameId => ({
  type: 'TOGGLE_PLAY_BY_PLAY',
  gameId
});

export const removeCard = gameId => ({
  type: 'REMOVE_CARD',
  gameId
});
