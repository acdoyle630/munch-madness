export const REDIRECT_TO = "REDIRECT_TO";

export const redirectToPath = (path) => ({
  type: REDIRECT_TO,
  path,
});
