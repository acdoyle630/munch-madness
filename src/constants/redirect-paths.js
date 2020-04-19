export const redirectPaths = Object.freeze({
  HOME: {
    back: null,
    forward: "/choose-settings",
    backPhase: null,
  },
  Parameters: {
    back: "/home",
    forward: "/choose-categories",
    backPhase: null,
  },
  Players: {
    back: "/choose-settings",
    forward: "/bracket",
    backPhase: "Parameters",
  },
  "Elite Ate": {
    back: "/choose-categories",
    forward: null,
    backPhase: "Players",
  },
});
