export const OPEN_ERROR_MODAL = "OPEN_ERROR_MODAL";
export const CLOSE_ERROR_MODAL = "CLOSE_ERROR_MODAL";

export const openErrorModal = ({ header, message }) => ({
  type: OPEN_ERROR_MODAL,
  header,
  message,
});

export const closeErrorModal = () => ({
  type: CLOSE_ERROR_MODAL,
});
