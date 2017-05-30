const defaultState = {
  name: 'anonymous'
};

function user(state = defaultState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { name: action.username };

    case 'LOGOUT':
      return {};

    default:
      return state;
  }
}

export default user;
