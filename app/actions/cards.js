export const togglePlayByPlay = gameId => ({
  type: 'TOGGLE_PLAY_BY_PLAY',
  gameId
});

export const removeCard = gameId => ({
  type: 'REMOVE_CARD',
  gameId
});

export const repositionCard = (from, to) => ({
  type: 'REPOSITION_CARD',
  from,
  to
});

export const shareGame = gameId => ({
  type: 'SHARE_GAME',
  gameId
});
