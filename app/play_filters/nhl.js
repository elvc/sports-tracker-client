const createPlayString = data => data.plays.play.reduce((acc, play, id) => {
  if (play === null) return acc;
  const output = {
    id,
    time: play.time,
    content: ''
  };
  const playType = Object.keys(play).filter(key => key !== 'period' && key !== 'time');
  switch (playType[0]) {
    case 'faceoff':
      if (play.faceoff.wonBy === data.game.homeTeam.Abbreviation) {
        output.content = `${play.faceoff.homePlayer.FirstName} ${play.faceoff.homePlayer.LastName} wins faceoff`;
      } else {
        output.content = `${play.faceoff.awayPlayer.FirstName} ${play.faceoff.awayPlayer.LastName} wins faceoff`;
      }
      break;
    case 'goal':
      output.content = `${play.goal.goalScorer.FirstName} ${play.goal.goalScorer.LastName} scores, assisted by ${play.goal.assist1Player.FirstName} ${play.goal.assist1Player.LastName}`;
      output.style = 'goal';
      break;
    case 'penaltyShot':
      switch (play.penaltyShot.outcome) {
        case 'Saved':
          output.content = `${play.penaltyShot.shooter.FirstName} ${play.penaltyShot.shooter.LastName} has penalty shot saved.`;
          break;
        case 'Missed':
          output.content = `${play.penaltyShot.shooter.FirstName} ${play.penaltyShot.shooter.LastName} misses a penalty shot.`;
          break;
        case 'Scored':
          output.content = `${play.penaltyShot.shooter.FirstName} ${play.penaltyShot.shooter.LastName} scores on a penalty shot.`;
          output.style = 'goal';
          break;
        default:
          break;
      }
      break;
    case 'goalieChange':
      output.content = `${play.goalieChange.incomingGoalie.FirstName} ${play.goalieChange.incomingGoalie.LastName} replaces ${play.goalieChange.outgoingGoalie.FirstName} ${play.goalieChange.outgoingGoalie.LastName} as goalie.`;
      break;
    case 'hit':
      output.content = `${play.hit.player.FirstName} ${play.hit.player.LastName} credited with hit.`;
      break;
    case 'penalty':
      output.content = `${play.penalty.penalizedPlayer.FirstName} ${play.penalty.penalizedPlayer.LastName} gets a ${play.penalty.severity.toLowerCase()} penalty, ${play.penalty.durationMinutes} min for ${play.penalty.type.toLowerCase()}`;
      break;
    case 'shot':
      output.content = `Shot on goal by ${play.shot.shooter.FirstName} ${play.shot.shooter.LastName}.`;
      break;
    default:
      break;
  }
  acc.push(output);
  return acc;
}, []);

export default createPlayString;
