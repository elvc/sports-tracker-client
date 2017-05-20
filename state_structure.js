const state = {
  chat: {
    active: 0, // array index
    rooms: [
      {
        game: 1905, // unique id for room
        messages: [
          {
            user: 'somebody',
            content: 'steph is the best'
          },
          {
            user: 'somebody else',
            content: 'lebron though'
          }
        ],
        onlineUsers: 12,
        input: 'this is a gr'
      }
    ]
  },
  cards: [
    {
      league: 'nba',
      homeTeam: 'SAS',
      awayTeam: 'GSW',
      homeScore: 150,
      awayScore: 85,
      quarter: 4,
      timeRemaining: 70,
      display: 'BASIC' // 'STATS', 'PLAY_BY_PLAY' other options
    },
    {
      league: 'nhl',
      homeTeam: '?',
      awayTeam: '?',
      homeScore: 3,
      awayScore: 1
    }
  ],
  gameSelector: {
    visible: [
      'NBA', 'MLB', 'MLB_TODAY'
    ],
    games: [
      // all game data here
    ]
  },
  user: {
    name: 'George'
  }
};
