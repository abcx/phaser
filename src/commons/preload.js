import levelsConf from "../config/levels.conf";
import generateAnimations from "../config/animations";
import { getTilesetData, checkGid } from "../commons/checkGid";

export default function preload(scene) {
  const isParallaxBcgr = Array.isArray(levelsConf[scene.scene.key].background);

  if (isParallaxBcgr) {
    // load parallax background
    levelsConf[scene.scene.key].background.forEach((el) => {
      scene.load.image(el.key + scene.scene.key, `assets/${el.value}`);
    });
  } else {
    // load single image background
    scene.load.image(
      "background" + scene.scene.key,
      `assets/${levelsConf[scene.scene.key].background}`
    );
  }

  // load sounds
  scene.load.audio("coin-" + scene.scene.key, "./assets/coin.mp3");
  scene.load.audio("diamond-" + scene.scene.key, "./assets/diamond.mp3");
  scene.load.audio("flag-" + scene.scene.key, "./assets/flag.mp3");
  scene.load.audio("enemyHit-" + scene.scene.key, "./assets/enemy-hit.mp3");
  scene.load.audio("openDialog-" + scene.scene.key, "./assets/open-dialog.mp3");
  scene.load.audio("playerHit-" + scene.scene.key, "./assets/player-hit.mp3");
  scene.load.audio("musicGame-" + scene.scene.key, "./assets/music-game.mp3");

  // load level data
  scene.load.tilemapTiledJSON(
    scene.scene.key,
    `./assets/${scene.scene.key}.json`
  );

  // load atlas file for Player
  scene.load.atlas(
    "atlas",
    `./assets/${levelsConf[scene.scene.key].player}.png`,
    `./assets/${levelsConf[scene.scene.key].player}_atlas.json`
  );
  // load atlas file for enemies
  scene.load.atlas(
    "enemies",
    `./assets/${levelsConf[scene.scene.key].enemies}.png`,
    `./assets/${levelsConf[scene.scene.key].enemies}_atlas.json`
  );

  // load tiles spritesheet
  scene.load.setPath("assets");

  let tilesets = [];

  levelsConf[scene.scene.key].tiles.map((tilesetName) => {
    tilesets.push({
        key: tilesetName,
        frameConfig: { frameWidth: 70, frameHeight: 70 }
    });
  });

  scene.load.spritesheet(tilesets);

  // generate animations
  scene.load.on("complete", () => {
    generateAnimations(scene);
  });
}
