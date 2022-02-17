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
import { flares, flame, comet, explode } from "../commons/emitters";
import Bullets from "../gameObjects/Bullets";

export default function create(scene) {
  let soundsOn = false;

  if (!levelsConf[scene.scene.key]) {
    return false;
  }

  const width = scene.scale.width;
  const height = scene.scale.height;
  const totalWidth = width * 10;
  const isParallaxBcgr = Array.isArray(levelsConf[scene.scene.key].background);

  if (isParallaxBcgr) {
    // set parallax background
    levelsConf[scene.scene.key].background.forEach((el, idx) => {
      if (idx === 0) {
        scene.add
          .image(width * 0.5, height * 0.5, el.key + scene.scene.key)
          .setScrollFactor(0)
          .setDepth(-1);
      } else {
        createAlignedBcgr(
          scene,
          totalWidth,
          el.key + scene.scene.key,
          el.scroll
        );
      }
    });
  } else {
    // set single image background
    let image = scene.add.image(
      scene.cameras.main.width / 2,
      scene.cameras.main.height / 2,
      "background" + scene.scene.key
    );
    let scaleX = scene.cameras.main.width / image.width;
    let scaleY = scene.cameras.main.height / image.height;
    let scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(0).setDepth(-1);
  }

  // set particle effects
  const particles = scene.add.particles("spark");
  const emitter = comet(particles);

  // set sounds
  scene.sound.pauseOnBlur = false;
  scene.fx = {};
  scene.fx.coin = scene.sound.add("coin-" + scene.scene.key);
  scene.fx.diamond = scene.sound.add("diamond-" + scene.scene.key);
  scene.fx.flag = scene.sound.add("flag-" + scene.scene.key);
  scene.fx.enemyHit = scene.sound.add("enemyHit-" + scene.scene.key);
  scene.fx.openDialog = scene.sound.add("openDialog-" + scene.scene.key);
  scene.fx.playerHit = scene.sound.add("playerHit-" + scene.scene.key);
  scene.fx.musicGame = scene.sound.add("musicGame-" + scene.scene.key, {
    volume: 1.0,
    loop: true,
  });

  // start play game music
  if (!scene.sound.locked) {
    // already unlocked so play
    if (soundsOn) {
      scene.fx.musicGame.play();
    }
  } else {
    // wait for 'unlocked' to fire and then play
    scene.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
      if (soundsOn) {
        scene.fx.musicGame.play();
      }
    });
  }

  // prepare scene
  scene.map = scene.make.tilemap({ key: scene.scene.key });

  let tilesets = [];

  levelsConf[scene.scene.key].tiles.map((tilesetName) => {
    tilesets.push(scene.map.addTilesetImage(tilesetName, tilesetName));
  });

  // define collisions
  const noCollisionTiles = [tiles.EMPTY, tiles.FLAG_LEFT];
  scene.platform = scene.map.createLayer("platforms", tilesets, 0, 0);
  scene.platform.setCollisionByExclusion(noCollisionTiles, true);

  scene.player = new Player(
    scene,
    levelsConf[scene.scene.key].playerPosition.x,
    levelsConf[scene.scene.key].playerPosition.y
  ).collideWith(scene.platform);

  scene.bullets = new Bullets(
    scene,
    "spark",
    levelsConf[scene.scene.key].bulletsQuantity
  );
  scene.enemies = new Enemy(scene).collideWith(scene.platform);
  scene.coins = new Coin(scene).collideWith(scene.player.sprite);
  scene.diamonds = new Diamond(scene).collideWith(scene.player.sprite);
  scene.flag = new Flag(scene).collideWith(scene.player.sprite);
  scene.infoBox = new InfoBox(scene).collideWith(scene.player.sprite);
  scene.debugger = new Debugger(scene);

  // set bullets
  document.querySelector(".bullets-amount").innerText =
    levelsConf[scene.scene.key].bulletsQuantity;

  scene.input.on("pointerdown", (pointer) => {
    scene.bullets.fireBullet(scene.player.sprite.x, scene.player.sprite.y);
  });
  scene.physics.add.collider(
    scene.bullets,
    scene.platform,
    onBulletHit,
    null,
    this
  );

  // reset camera
  scene.cameras.main.resetFX();

  // define inputs
  scene.inputs = scene.input.keyboard.createCursorKeys();

  //   scene.input.on("pointerdown", function (container) {
  //     console.log(container);
  //   });

  scene.input.keyboard.on(Phaser.Events, (event) => {
    console.log(event.key);
  });

  // keyboard
  const forceNextLevel = scene.input.keyboard.addKey("N"); // Get key object
  const forceEndOfGame = scene.input.keyboard.addKey("E"); // Get key object

  forceNextLevel.on("up", (event) => {
    const L = increaseLevelNumber(scene);

    console.log(`Go to ${L}`);

    resetScore();

    // stop music
    scene.fx.musicGame.stop();

    if (L) {
      scene.scene.start(L);
    } else {
      scene.scene.start("ScorePage");
    }
  });

  forceEndOfGame.on("up", (event) => {
    scene.scene.start("ScorePage");
  });

  // manage sound
  document.querySelector("#sounds").addEventListener("click", (e) => {
    soundsOn = e.target.checked;
    if (soundsOn) {
      scene.fx.musicGame.stop();
    } else {
      scene.fx.musicGame.play();
    }
  });
}

const onBulletHit = (bullet, obstacle) => {
  bullet.destroy();
  console.log("CREATE onBulletHit", bullet, obstacle);
};
