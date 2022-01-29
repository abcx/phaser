import Phaser from "phaser";
import Level_000 from "./scenes/Level_000.js";
import Level_001 from "./scenes/Level_001.js";
import Level_002 from "./scenes/Level_002.js";
import Level_003 from "./scenes/Level_003.js";
import Level_004 from "./scenes/Level_004.js";
import Level_005 from "./scenes/Level_005.js";
import Level_006 from "./scenes/Level_006.js";
import GameStart from "./scenes/GameStart.js";
import GameOver from "./scenes/GameOver.js";
import ScorePage from './scenes/ScorePage';

import "./assets/scss/index.scss";

let size = {
  TILE_SIZE: 70,
  screenWidth: 0,
  screenHeight: 0,
  windowWidth: 0,
  windowHeight: 0,
};

const getScreenSize = (() => {
  size.screenWidth = window.screen.width * window.devicePixelRatio;
  size.screenHeight = window.screen.height * window.devicePixelRatio;
  size.windowWidth = window.innerWidth;
  size.windowHeight = window.innerHeight;
  console.log(
    `Your screen resolution is: ${size.screenWidth} x ${size.screenHeight}. Window size is: ${size.windowWidth} x ${size.windowHeight}`
  );
})();

const getSceneSize = (param) => {
  return Math.floor(param / size.TILE_SIZE);
};

const config = {
  //   width: 1120,
  //   height: 910,
  width: getSceneSize(size.windowWidth) * size.TILE_SIZE,
  height: getSceneSize(size.windowHeight) * size.TILE_SIZE,
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
  scene: [
    GameStart,
    Level_000,
    Level_001,
    Level_002,
    Level_003,
    Level_004,
    Level_005,
    Level_006,
    ScorePage,
    GameOver,
  ],
  audio: {
    disableWebAudio: true,
  },
};

new Phaser.Game(config);
