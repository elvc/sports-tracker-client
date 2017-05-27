const BASEBALL = 'mlb';
const BASKETBALL = 'nba';
const AMERICAN_FOOTBALL = 'nfl';
const HOCKEY = 'nhl';

var moment = require('moment-timezone');


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

export const getStartingTime = (game) => {
  const date = game.date;
  const time = game.time;
  const city = game.homeTeam.City;
  const location = game.location;
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}+${city}&types=(cities)&sensor=false&key=${googleAPIkey}`)
  .then(response => response.json())
  .then(json => {
    const result = json.results[0];
    const latitude = result.geometry.location.lat;
    const longitude = result.geometry.location.lng;
    const location = `${latitude},${longitude}`;
    return fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${location}&timestamp=1331161200&sensor=false&key=${googleAPIkey}`)
    .then(response => response.json())
    .then(json => {
      const timezone = json.timeZoneId;
      const startTime = moment.tz(`${date} ${time}`, "YYYY-MM-DD hh:mmA", timezone);
      return startTime.local();
    })
  });
}

export const fetchFeeds = (sport, date) => (dispatch) => {
  dispatch(requestFeeds(sport));
  return fetch(`https://www.mysportsfeeds.com/api/feed/pull/${sport}/latest/daily_game_schedule.json?fordate=${date}`, {
    method: 'get',
    headers: {
      Authorization: `Basic ${btoa('${username}:${password}')}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
    .then((json) => {
      Promise.all(json.dailygameschedule.gameentry.map(game => {
         return new Promise((resolve, reject) => {
           getStartingTime(game).then(response => {
            game.time = response.format('hh:mmA');
            return game;
          }).then(resolve(game));
        })
      }))
        .then(values => {
            switch (sport) {
              case BASEBALL:
                dispatch(receiveMLB(values));
                break;
              case BASKETBALL:
                dispatch(receiveNBA(values));
                break;
              case HOCKEY:
                dispatch(receiveNHL(values));
                break;
              case AMERICAN_FOOTBALL:
                dispatch(receiveNFL(values));
                break;
              default:
                break;
            }
          });
    });
}
