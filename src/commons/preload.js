import levelsConf from "../config/levels.conf";
import generateAnimations from "../config/animations";

export default function preload(scene) {
  const isParallaxBcgr = Array.isArray(levelsConf[scene.level].background);

  if (isParallaxBcgr) {
    // load parallax background
    levelsConf[scene.level].background.forEach((el) => {
      scene.load.image(el.key, `assets/${el.value}`);
    });
  } else {
    // load single image background
    scene.load.image(
      "background",
      `assets/${levelsConf[scene.level].background}`
    );
  }

  // load tiles spritesheet
  scene.load.spritesheet(
    `${scene.level}-tiles`,
    `assets/${levelsConf[scene.level].tiles}.png`,
    {
      frameWidth: 70,
      frameHeight: 70,
    }
  );
  // load level data
  scene.load.tilemapTiledJSON(scene.level, `./assets/${scene.level}.json`);

  // load atlas file for Player
  scene.load.atlas(
    "atlas",
    `./assets/${levelsConf[scene.level].player}.png`,
    `./assets/${levelsConf[scene.level].player}_atlas.json`
  );
  // load atlas file for enemies
  scene.load.atlas(
    "enemies",
    `./assets/${levelsConf[scene.level].enemies}.png`,
    `./assets/${levelsConf[scene.level].enemies}_atlas.json`
  );
  // generate animations
  scene.load.on("complete", () => {
    generateAnimations(scene);
  });
}
