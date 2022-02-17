import tileNames from "../commons/tileNames";

const standard = {
  // tile size
  tileSize: 70,
  // list of filenames contains tiles
  tiles: ["tiles", "tilesAsia", "tilesMania"],
  // player atlas filename
  player: "player",
  // enemies atlas filename
  enemies: "enemies",
  // list of enemies' names inside atlas file
  enemiesNames: [
    {
      name: "snailwalk",
    },
    {
      name: "slimewalk",
    },
  ],
  // connect tile numbers to tile names
  tileNames: tileNames,
  // default player position on stage
  playerPosition: { x: 30, y: 870 },
  // parallax background settings
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
  // quantity of bullets
  bulletsQuantity: 5
};

/**
 * Levels' definitions
 */
export default {
  conf: standard,
  Level_000: {
    ...standard,
    tileNames: { ...tileNames, EXIT: tileNames.EXIT_SIGN },
  },
  Level_001: standard,
  Level_002: { ...standard, background: "noce-poce.jpg" },
  Level_003: { ...standard, background: "bcgrAsia.jpeg" },
  Level_004: standard,
  Level_005: standard,
  Level_006: {
    ...standard,
    background: "noce-poce.jpg",
    playerPosition: { x: 30, y: 300 },
  },
};
