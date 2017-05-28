export const login = username => ({
  type: 'LOGIN',
  username
});

export const logout = () => ({
  type: 'LOGOUT'
});
