import { expect } from 'chai';
import reducers from '../app/reducers';

describe('chat', () => {
  let state;
  beforeEach(() => {
    state = {
      notifications: [],
      user: {
        name: 'anonymous'
      },
      modal: { modal: 'NONE' },
      chat: {
        active: 1,
        rooms: [
          {
            name: 'GSW/SAS',
            id: 1,
            messages: [],
            onlineUsers: 1,
            input: 'hello',
            unread: false
          }
        ]
      },
      sidebar:
      {
        gamesNHL: [],
        gamesNFL: [],
        gamesMLB: [],
        gamesNBA: [],
        receivedAt: 1495923999551
      },
      cards: [
        {
          gameId: 1,
          league: 'NBA',
          homeTeam: 'SAS',
          awayTeam: 'GSW',
          homeScore: 91,
          awayScore: 120,
          quarter: '4',
          timeRemaining: '10:09',
          displayPlayByPlay: false,
          scoreLoading: false,
          gameOver: true,
          plays: [],
          gameStarted: true
        },
        {
          gameId: 2,
          league: 'MLB',
          homeTeam: 'PIT',
          awayTeam: 'TOR',
          homeScore: 5,
          awayScore: 6,
          displayPlayByPlay: false,
          scoreLoading: false,
          currentInning: '4',
          currentInningHalf: 'top',
          innings: [
            {
              inning: 1,
              awayScore: 2,
              homeScore: 0
            }
          ],
          plays: [],
          gameStarted: true,
          gameCompleted: false
        }
      ]
    };
  });
  it('clear input field on send', () => {
    const testState = reducers(state, { type: 'SEND_MESSAGE' });
    const expectState = state;
    expect(testState).to.eql(expectState);
  });
  it('update input on key press', () => {
    const testState = reducers(state, { type: 'INPUT_CHANGE', input: 'h', roomId: 1 });
    const expectState = state;
    expect(testState).to.eql(expectState);
  });
  it('adds message when received', () => {
    const testState = reducers(state, { type: 'RECEIVE_MESSAGE', room: 1 });
    const expectState = state;
    expect(testState).to.eql(expectState);
  });
  it('removes room', () => {
    const testState = reducers(state, { type: 'LEAVE_ROOM', roomId: 1 });
    const expectState = state;
    expectState.chat.rooms = [];
    expectState.chat.active = 0;
    expect(testState).to.eql(expectState);
  });
  it('joins a room', () => {
    const testState = reducers(state, { type: 'JOIN_ROOM', room: { name: 'TOR/PIT', id: 2, messages: [], onlineUsers: 1, input: '', unread: false } });
    const expectState = state;
    expectState.chat.rooms.push({ name: 'TOR/PIT', id: 2, messages: [], onlineUsers: 1, input: '', unread: false });
    expectState.chat.active = 2;
    expect(testState).to.eql(expectState);
  });
  it('changes room', () => {
    state.chat.rooms.unshift({ name: 'TOR/PIT', id: 2, messages: [], onlineUsers: 1, input: '', unread: false });
    state.chat.active = 2;
    const testState = reducers(state, { type: 'CHANGE_ROOM', roomId: 1 });
    const expectState = state;
    expectState.chat.active = 1;
    expect(testState).to.eql(expectState);
  });
  it('updates user count', () => {
    const testState = reducers(state, { type: 'UPDATE_USER_COUNT', room: 1, userCount: 2 });
    const expectState = state;
    expectState.chat.rooms[0].onlineUsers = 2;
    expect(testState).to.eql(expectState);
  });
  it("returns state if trying to update room that doens't exist", () => {
    const testState = reducers(state, { type: 'UPDATE_USER_COUNT', room: 10, userCount: 2 });
    expect(testState).to.eql(state);
  });
});

describe('cards', () => {
  let state;
  beforeEach(() => {
    state = {
      notifications: [],
      user: {
        name: 'anonymous'
      },
      modal: { modal: 'NONE' },
      chat: {
        active: 1,
        rooms: [
          {
            name: 'GSW/SAS',
            id: 1,
            messages: [],
            onlineUsers: 1,
            input: 'hello',
            unread: false }
        ] },
      sidebar:
      {
        gamesNHL: [],
        gamesNFL: [],
        gamesMLB: [],
        gamesNBA: [],
        receivedAt: 1495923999551
      },
      cards: [
        {
          gameId: 1,
          league: 'NBA',
          homeTeam: 'SAS',
          awayTeam: 'GSW',
          homeScore: 91,
          awayScore: 120,
          quarter: '4',
          timeRemaining: '10:09',
          displayPlayByPlay: false,
          scoreLoading: false,
          gameOver: true,
          plays: [],
          gameStarted: true
        },
        { gameId: 2,
          league: 'MLB',
          homeTeam: 'PIT',
          awayTeam: 'TOR',
          homeScore: 5,
          awayScore: 6,
          displayPlayByPlay: false,
          scoreLoading: false,
          currentInning: '4',
          currentInningHalf: 'top',
          innings: [
            {
              inning: 1,
              awayScore: 2,
              homeScore: 0
            }
          ],
          plays: [],
          gameStarted: true,
          gameCompleted: false
        }
      ]
    };
  });
  it('toggle play by play', () => {
    const testState = reducers(state, { type: 'TOGGLE_PLAY_BY_PLAY', gameId: 1 });
    const expectState = state;
    expectState.cards[0].displayPlayByPlay = true;
    expect(testState).to.eql(expectState);
  });
  it('remove a card', () => {
    const testState = reducers(state, { type: 'REMOVE_CARD', gameId: 2 });
    const expectState = state;
    expectState.cards.splice(1, 2);
    expect(testState).to.eql(expectState);
  });
  it("returns state if card doesn't exist", () => {
    const testState = reducers(state, { type: 'REMOVE_CARD', gameId: 5 });
    expect(testState).to.eql(state);
  });
  it('adds a card', () => {
    state.cards = [];
    const testState = reducers(state, {
      type: 'ADD_CARD',
      game: {
        gameId: 6,
        league: 'NBA',
        homeTeam: 'SAS',
        awayTeam: 'GSW',
        homeScore: 91,
        awayScore: 120,
        quarter: '4',
        timeRemaining: '10:09',
        displayPlayByPlay: false,
        scoreLoading: false,
        gameOver: true,
        plays: [],
        gameStarted: true
      }
    });
    const expectState = state;
    expectState.cards = [{
      gameId: 6,
      league: 'NBA',
      homeTeam: 'SAS',
      awayTeam: 'GSW',
      homeScore: 91,
      awayScore: 120,
      quarter: '4',
      timeRemaining: '10:09',
      displayPlayByPlay: false,
      scoreLoading: false,
      gameOver: true,
      plays: [],
      gameStarted: true
    }];
    expect(testState).to.eql(expectState);
  });
  it('returns state if card already exists', () => {
    const testState = reducers(state, {
      type: 'ADD_CARD',
      game: {
        gameId: 1,
        league: 'NBA',
        homeTeam: 'SAS',
        awayTeam: 'GSW',
        homeScore: 91,
        awayScore: 120,
        quarter: '4',
        timeRemaining: '10:09',
        displayPlayByPlay: false,
        scoreLoading: false,
        gameOver: true,
        plays: [],
        gameStarted: true
      }
    });
    expect(testState).to.eql(state);
  });
  it('swaps cards', () => {
    const testState = reducers(state, { type: 'REPOSITION_CARD', from: 0, to: 1 });
    const oldCards = state.cards.slice();
    const expectState = state;
    expectState.cards = [oldCards[1], oldCards[0]];
    expect(testState).to.eql(expectState);
  });
  it('returns previous state for invalid input', () => {
    const testState = reducers(state, { type: 'REPOSITION_CARD', from: 0, to: 2 });
    expect(testState).to.eql(state);
  });
});
