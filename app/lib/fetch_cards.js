import api from './api';

export default (receiveCard) => {
  const HOST = location.origin.replace('8081', '8080');
  api.get(`${HOST}/users/get`).then((response) => {
    if (Object.keys(response.response).length) {
      response.response.forEach((card) => {
        api.post(`${HOST}/leagues/${card.league}/games/${card.gameId}`, card).then((data) => {
          receiveCard(data.response);
        })
        .catch((err) => {
          console.log(`Unable to fetch game data for ${card.league} game ${card.gameId}`);
          console.log(err.message);
        });
      });
    }
  })
  .catch((err) => {
    console.log(`Unable to fetch users cards: ${err.message}`);
  });
};
