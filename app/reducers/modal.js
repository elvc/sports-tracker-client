export default (state = { modal: 'NONE' }, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        display: action.modal,
        ...action
      };
    case 'CLOSE_MODAL':
      return { modal: 'NONE' };
    default:
      return state;
  }
};
