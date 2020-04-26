export const OPEN_ROUND_MODAL = "OPEN_ROUND_MODAL";
export const CLOSE_ROUND_MODAL = "CLOSE_ROUND_MODAL";

export const openRoundModal = (round) => ({
  type: OPEN_ROUND_MODAL,
  round,
});

export const closeRoundModal = () => ({
  type: CLOSE_ROUND_MODAL,
});
