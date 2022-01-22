import tileNames from "../commons/tileNames";

const standard = {
  tiles: "tiles",
  player: "player",
  enemies: "enemies",
  tileNames: tileNames,
  //   background: "noce-poce.jpg"
  background: [
    {
      key: "sky",
      value: "layer_sky.png",
      scroll: 0,
    },
    {
      key: "clouds",
      value: "layer_clouds.png",
      scroll: 0.25,
    },
    {
      key: "trees",
      value: "layer_trees.png",
      scroll: 0.5,
    },
  ],
};

export default {
  Level_000: {
    ...standard,
    tileNames: { ...tileNames, EXIT: tileNames.EXIT_SIGN },
  },
  Level_001: { ...standard, background: "noce-poce.jpg" },
  Level_002: standard,
  Level_003: standard,
  Level_004: standard,
};
