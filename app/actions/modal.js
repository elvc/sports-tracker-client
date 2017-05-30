export function showModal(modal, info) {
  return {
    type: 'SHOW_MODAL',
    modal,
    info
  };
}

export function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  };
}
