export const requestFeeds = sport => ({
  type: 'REQUEST_FEEDS'
});

export const receiveNBA = games => ({
  type: 'RECEIVE_NBA',
  gamesNBA: games || [],
  receivedAt: Date.now()
});

export const receiveMLB = games => ({
  type: 'RECEIVE_MLB',
  gamesMLB: games || [],
  receivedAt: Date.now()
});

export const receiveNHL = games => ({
  type: 'RECEIVE_NHL',
  gamesNHL: games || [],
  receivedAt: Date.now()
});

export const receiveNFL = games => ({
  type: 'RECEIVE_NFL',
  gamesNFL: games || [],
  receivedAt: Date.now()
});

export const receiveFavorites = games => ({
  type: 'RECEIVE_FAVORITES',
  games
});
