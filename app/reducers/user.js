const defaultState = {};

function user(state = defaultState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        name: action.username,
        email: action.email
      };

    case 'LOGOUT':
      return {};

    default:
      return state;
  }
}

export default user;
