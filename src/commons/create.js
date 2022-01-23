import Player from "../gameObjects/Player";
import Debugger from "../gameObjects/Debugger";
import Enemy from "../gameObjects/Enemy";
import Coin from "../gameObjects/Coin";
import Diamond from "../gameObjects/Diamond";
import Flag from "../gameObjects/Flag";
import InfoBox from "../gameObjects/InfoBox";
import tiles from "../config/tiles";
import resetScore from "../ui/resetScore";
import increaseLevelNumber from "../commons/increaseLevelNumber";
import createAlignedBcgr from "../commons/createAlignedBcgr";
import levelsConf from "../config/levels.conf";

export default function create(scene) {
  const noCollisionTiles = [tiles.EMPTY, tiles.FLAG_LEFT];

  const width = scene.scale.width;
  const height = scene.scale.height;
  const totalWidth = width * 10;
  const isParallaxBcgr = Array.isArray(levelsConf[scene.level].background);

  if (isParallaxBcgr) {
    // load parallax background
    levelsConf[scene.level].background.forEach((el, idx) => {
      if (idx === 0) {
        scene.add
          .image(width * 0.5, height * 0.5, "sky")
          .setScrollFactor(0)
          .setDepth(-1);
      } else {
        createAlignedBcgr(scene, totalWidth, el.key, el.scroll);
      }
    });
  } else {
    // load single image background
    let image = scene.add.image(
      scene.cameras.main.width / 2,
      scene.cameras.main.height / 2,
      "background" + scene.level
    );
    let scaleX = scene.cameras.main.width / image.width;
    let scaleY = scene.cameras.main.height / image.height;
    let scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(0).setDepth(-1);
  }

  // //   scene.add.image(960, 400, 'background');
  // //   scene.add.image(0, 0, 'background').setOrigin(0, 0).setScale(.85).setDepth(-1);

  // //the width and height value could be the screen width and height
  // //"background" is the name of your preloaded image
  // //   scene.background = scene.add.tileSprite(0, 0, scene.sys.canvas.height, scene.sys.canvas.height, "background")
  // //                             .setDepth(-1)
  // //                             .setOrigin(0)
  // //                             .setScrollFactor(0, 1) //this line keeps your background from scrolling outside of camera bounds
  // //                             .setTilePosition(scene.cameras.main.scrollX);

  scene.map = scene.make.tilemap({ key: scene.level });
  scene.tileset = scene.map.addTilesetImage("tiles", `${scene.level}-tiles`);

  scene.platform = scene.map.createLayer("platforms", scene.tileset, 0, 0);
  scene.platform.setCollisionByExclusion(noCollisionTiles, true);

  //   scene.map.createLayer("background", scene.tileset, 0, 0);

  scene.player = new Player(scene, 30, 550).collideWith(scene.platform);
  scene.enemies = new Enemy(scene).collideWith(scene.platform);
  scene.coins = new Coin(scene).collideWith(scene.player.sprite);
  scene.diamonds = new Diamond(scene).collideWith(scene.player.sprite);
  scene.flag = new Flag(scene).collideWith(scene.player.sprite);
  scene.infoBox = new InfoBox(scene).collideWith(scene.player.sprite);
  scene.debugger = new Debugger(scene);

  scene.inputs = scene.input.keyboard.createCursorKeys();

  //   scene.input.on("pointerdown", function (container) {
  //     console.log(container);
  //   });

  scene.input.once(
    "pointerdown",
    function (event) {
      const L = increaseLevelNumber(scene);
      console.log(`From Level_000 to ${L}`);
      resetScore();
      if (L) {
        scene.scene.start(L);
      } else {
        scene.scene.start("GameOver");
      }
    },
    scene
  );
}
