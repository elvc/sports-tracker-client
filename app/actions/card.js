const moment = require('moment-timezone');
import mlb from '../play_filters/mlb';
import nhl from '../play_filters/nhl';
import nba from '../play_filters/nba';


const BASEBALL = 'mlb';
const BASKETBALL = 'nba';
const AMERICAN_FOOTBALL = 'nfl';
const HOCKEY = 'nhl';


export const receiveCard = (data) => ({
  type: 'ADD_CARD',
  game: {
    gameId: Number(data.id),
    league: data.league,
    display: 'BASIC',
    homeTeam: data.homeTeam,
    awayTeam: data.awayTeam,
    homeScore: data.homeScore,
    awayScore: data.awayScore,
    quarter: 0,
    timeRemaining: 0,
    date: data.date,
    gameStarted: data.gameStarted,
    displayPlayByPlay: data.displayPlayByPlay,
    plays: data.plays
  }
})

function gameSelector(id, json){
  return json.scoreboard.gameScore.find(obj => {
    return obj.game.ID ==+ id.toString();
  });
}

export const fetchCardInfo = (game) => (dispatch) =>  {
  const game_starting_time = moment(game.time,'hh:mmA');
  if(game_starting_time.isBefore(moment())){
    const date = game.date.replace(/-/g , '');
    const data = {};
    return fetch(`https://www.mysportsfeeds.com/api/feed/pull/${game.league}/latest/scoreboard.json?fordate=${date}`, {
       method: 'get',
       headers: {
         'Authorization': 'Basic '+btoa('${username}:${password}'),
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }
     })
    .then(response => response.json())
    .then(json => {
        const selectedGame = gameSelector(game.gameId, json);
        data.id = game.gameId;
        data.league = game.league;
        data.display = 'BASIC';
        data.awayTeam = game.awayTeam;
        data.homeTeam = game.homeTeam;
        data.homeScore = Number(selectedGame.homeScore);
        data.awayScore = Number(selectedGame.awayScore);
        data.date = game.date;
        data.gameStarted = true;
        data.gameCompleted = selectedGame.isCompleted;
        data.displayPlayByPlay = true;
        data.plays = [];

      return fetch(`https://www.mysportsfeeds.com/api/feed/pull/${game.league}/latest/game_playbyplay.json?gameid=${game.gameId}`, {
       method: 'get',
       headers: {
         'Authorization': 'Basic '+btoa('${username}:${password}'),
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }
     }).then(response => response.json())
      .then(json => {
        switch (game.league){
          case BASEBALL:
            data.plays = mlb(json);
            dispatch(receiveCard(data))
            break;
          case BASKETBALL:
            data.plays = nba(json);
            dispatch(receiveCard(data))
            break;
          case HOCKEY:
            data.plays = nhl(json);
            dispatch(receiveCard(data))
            break;
          default:
            break;
        }
      });
    })
  } else {
    const data = {
      id: game.gameId,
      league: game.league,
      display: 'BASIC',
      homeTeam: game.homeTeam,
      awayTeam: game.awayTeam,
      homeScore: 0,
      awayScore: 0,
      date: game.date,
      gameStarted: false,
      displayPlayByPlay: false,
      plays: []
    }
    switch(game.league){
      case BASEBALL:
          data.inning = 0;
          break;
        case BASKETBALL:
          data.quarter = 0;
          break;
        case HOCKEY:
          data.period = 0;
          break;
        default:
          break;
    }
    dispatch(receiveCard(data))
  }
}