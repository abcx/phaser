import Phaser from "phaser";
import Level_000 from "./scenes/Level_000.js";
import Level_001 from "./scenes/Level_001.js";
import Level_002 from "./scenes/Level_002.js";
import Level_003 from "./scenes/Level_003.js";
import Level_004 from "./scenes/Level_004.js";
import Level_005 from "./scenes/Level_005.js";
import Level_006 from "./scenes/Level_006.js";
import GameOver from "./scenes/GameOver.js";

import "./assets/scss/index.scss";

const config = {
  width: 1120,
  height: 910,
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
  scene: [Level_000, Level_001, Level_002, Level_003, Level_004, Level_005, Level_006, GameOver],
  audio: {
      disableWebAudio: true
  },
};

new Phaser.Game(config);
