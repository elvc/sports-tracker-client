export const receiveCard2 = data => ({
  type: 'ADD_CARD',
  game: {
    gameId: Number(data.gameId),
    league: data.league,
    display: 'BASIC',
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
