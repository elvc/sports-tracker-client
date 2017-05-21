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
      gameId: 1,
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
      gameId: 2,
      league: 'nhl',
      homeTeam: 'Senators',
      awayTeam: 'Penguins',
      homeScore: 10,
      awayScore: 3,
      quarter: 4,
      timeRemaining: 50,
    },
    {
      gameId: 3,
      league: 'MLB',
      homeTeam: 'Giants',
      awayTeam: 'Yankees',
      homeScore: 9,
      awayScore: 5,
      quarter: 4,
      timeRemaining: 30,
    },
    {
      gameId: 4,
      league: 'NBA',
      homeTeam: 'Lakers',
      awayTeam: 'Kings',
      homeScore: 35,
      awayScore: 25,
      quarter: 2,
      timeRemaining: 36,
    },
    {
      gameId: 5,
      league: 'MLB',
      homeTeam: 'Rays',
      awayTeam: 'Reds',
      homeScore: 3,
      awayScore: 4,
      quarter: 2,
      timeRemaining: 100,
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

export default state;