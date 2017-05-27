export const defaultPrefix = 'socket/';

export const socketAction = fn => (...args) => {
  const { type, payload } = fn(...args);
  return {
    type: defaultPrefix + type,
    payload
  };
};
