import Phaser from "phaser";

import Level_001 from "./scenes/Level_001.js";
import Level_002 from "./scenes/Level_002.js";
import GameOver from "./scenes/GameOver.js";

import "./assets/scss/index.scss";

const config = {
  width: 840,
  height: 700,
  parent: "stage",
  backgroundColor: "#FFFFAC",
  title: "Tilemap",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      // debug: true, // Set it to true if you want debugger enabled by default
      gravity: {
        y: 1000,
      },
    },
  },
  scene: [Level_001, Level_002, GameOver],
};

new Phaser.Game(config);
