import tileNames from "../commons/tileNames";

const standard = {
  tiles: "tiles",
  player: "player",
  enemies: "enemies",
  tileNames: tileNames,
};

export default {
  Level_000: { ...standard, tileNames: { ...tileNames, EXIT: tileNames.EXIT_SIGN } },
  Level_001: standard,
  Level_002: standard,
  Level_003: standard,
  Level_004: standard,
};
