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

export const addCard = (gameId, homeTeam, awayTeam) => ({
  type: 'ADD_CARD',
  game: {
    gameId,
    homeTeam,
    awayTeam,
    isLoading: true
  }
});

export const receiveCard = data => ({
  type: 'RECEIVE_CARD',
  game: {
    gameId: Number(data.gameId),
    league: data.league,
    homeTeam: data.homeTeam,
    awayTeam: data.awayTeam,
    homeScore: Number(data.homeScore),
    awayScore: Number(data.awayScore),
    date: data.date,
    gameStarted: data.gameStarted,
    startTime: data.startTime,
    isCompleted: data.inProgress !== 'true' && data.isUnplayed !== 'true',
    displayPlayByPlay: data.displayPlayByPlay,
    plays: data.plays,
    currentInning: data.currentInning || 0,
    currentInningHalf: data.currentInningHalf || '',
    innings: data.innings || [],
    quarter: data.quarter || 0,
    timeRemaining: data.timeRemaining || 0,
    period: data.period || 0,
    periods: data.periods || []
  }
});
