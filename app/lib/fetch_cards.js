import api from './api';

export default (addCard, receiveCard, receiveFavorites, notify, failedCardLoad) => {
  const cardError = {
    title: 'Problem fetching data',
    status: 'error',
    dismissible: true,
    dismissAfter: 2000
  };
  const HOST = location.origin.replace('8081', '8080');
  api.get(`${HOST}/users/get`).then((response) => {
    if (Object.keys(response.response).length) {
      response.response.forEach((card) => {
        addCard(card.gameId, card.homeTeam, card.awayTeam, card.time);
        api.post(`${HOST}/leagues/${card.league}/games/${card.gameId}`, card).then((data) => {
          receiveCard(data.response);
        })
        .catch(() => {
          cardError.message = `Unable to fetch game data for ${card.league} game ${card.gameId}`;
          notify(cardError);
          failedCardLoad(card.gameId);
        });
      });
    }
    receiveFavorites(response.favorites);
  })
  .catch(() => {
    cardError.message = 'Unable to fetch users cards';
    notify(cardError);
  });
};
