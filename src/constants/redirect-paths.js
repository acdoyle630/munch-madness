export const redirectPaths = Object.freeze({
  HOME: {
    back: null,
    forward: "/choose-settings",
  },
  Parameters: {
    back: "/home",
    forward: "/choose-categories",
  },
  Categories: {
    back: "/choose-settings",
    forward: "/bracket",
  },
});
