export const defaultPrefix = 'socket/';

export const socketAction = fn => (...args) => {
  const { type, payload } = fn(...args);
  console.log('type', type, 'payload', payload);
  return {
    type: defaultPrefix + type,
    payload
  };
};
