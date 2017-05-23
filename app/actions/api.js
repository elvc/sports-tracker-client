const BASEBALL = 'mlb';
const BASKETBALL = 'nba';
const AMERICAN_FOOTBALL = 'nfl';
const HOCKEY = 'nhl';

export const requestFeeds = sport => ({
  type: 'REQUEST_FEEDS'
})

export const receiveNBA = (json) => ({
  type: 'RECEIVE_NBA',
  gamesNBA: json.dailygameschedule.gameentry || [],
  receivedAt: Date.now()
})

export const receiveMLB = (json) => ({
  type: 'RECEIVE_MLB',
  gamesMLB: json.dailygameschedule.gameentry || [],
  receivedAt: Date.now()
})

export const receiveNHL = (json) => ({
  type: 'RECEIVE_NHL',
  gamesNHL: json.dailygameschedule.gameentry|| [],
  receivedAt: Date.now()
})

export const receiveNFL = (json) => ({
  type: 'RECEIVE_NFL',
  gamesNFL: json.dailygameschedule.gameentry || [],
  receivedAt: Date.now()
})

export const fetchFeeds = (sport, date) => (dispatch) =>  {
  dispatch(requestFeeds(sport));
  return fetch(`https://www.mysportsfeeds.com/api/feed/pull/${sport}/latest/daily_game_schedule.json?fordate=${date}`, {
       method: 'get',
       headers: {
         'Authorization': 'Basic '+btoa('sportsTracker:sportsTracker'),
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }
     })
    .then(response => response.json())
    .then(json => {
      switch (sport){
        case BASEBALL:
          dispatch(receiveMLB(json))
          break;
        case BASKETBALL:
          dispatch(receiveNBA(json))
          break;
        case HOCKEY:
          dispatch(receiveNHL(json))
          break;
        case AMERICAN_FOOTBALL:
          dispatch(receiveNFL(json))
          break;
        default:
          break;
      }
    })
}
