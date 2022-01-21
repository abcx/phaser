import Player from "../gameObjects/Player";
import Debugger from "../gameObjects/Debugger";
import Enemy from "../gameObjects/Enemy";
import Coin from "../gameObjects/Coin";
import Diamond from "../gameObjects/Diamond";
import Flag from "../gameObjects/Flag";
import tiles from "../config/tiles";
import resetScore from '../ui/resetScore';
import increaseLevelNumber from '../commons/increaseLevelNumber';

export default function create(scene) {
  const noCollisionTiles = [tiles.EMPTY, tiles.FLAG_LEFT];

  scene.map = scene.make.tilemap({ key: scene.level });
  scene.tileset = scene.map.addTilesetImage("tiles", `${scene.level}-tiles`);

  scene.platform = scene.map.createLayer("platforms", scene.tileset, 0, 0);
  scene.platform.setCollisionByExclusion(noCollisionTiles, true);

  // scene.map.createLayer("background", scene.tileset, 0, 0);

  scene.player = new Player(scene, 30, 550).collideWith(scene.platform);
  scene.enemies = new Enemy(scene).collideWith(scene.platform);
  scene.coins = new Coin(scene).collideWith(scene.player.sprite);
  scene.diamonds = new Diamond(scene).collideWith(scene.player.sprite);
  scene.flag = new Flag(scene).collideWith(scene.player.sprite);
  scene.debugger = new Debugger(scene);

  scene.inputs = scene.input.keyboard.createCursorKeys();

  scene.input.once(
    "pointerdown",
    function (event) {
      const L = increaseLevelNumber(scene);
      console.log(`From Level_000 to ${L}`);
      resetScore();
      if (L) {
        scene.scene.start(L);
      } else {
        scene.scene.start('GameOver');
      }
    },
    scene
  );
}