import { expect } from 'chai';
import reducers from '../app/reducers';

describe('chat', () => {
  let state;
  beforeEach(() => {
    state = {
      user: {
        name: 'anonymous'
      },
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
});

describe('cards', () => {
  let state;
  beforeEach(() => {
    state = {
      user: {
        name: 'anonymous'
      },
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
});
