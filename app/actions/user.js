export const login = (username, email) => ({
  type: 'LOGIN',
  username,
  email
});

export const logout = () => ({
  type: 'LOGOUT'
});
