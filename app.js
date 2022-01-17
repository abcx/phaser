import Phaser from "phaser";
import { assets } from "./assets";
import * as level from "./level.json";
import * as SETTINGS from "./game-settings.json";

let score = 0;
let player;
let cursors;

let scoreText;

const config = {
  width: SETTINGS.tileSize * 20,
  height: SETTINGS.tileSize * 10,
  backgroundColor: 0xffffff,
  scene: {
    preload,
    create,
    update,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);

function preload() {
  assets.forEach((_) => {
    if (_ !== "player") {
      this.load.image(_, `assets/${_}.png`);
    } else {
      this.load.spritesheet(_, `assets/${_}.png`, {
        frameWidth: 64,
        frameHeight: 74,
      });
    }
  });
}

function create() {
  let item;

  scoreText = this.add.text(16, 16, "Stars: 0", {
    fontSize: "32px",
    fill: "#000",
  });

  let platforms = this.physics.add.staticGroup();
  let stars = this.physics.add.group();

  console.log(level, typeof level);

  for (let i in level) {
    item = level[i];

    switch (item.type) {
      case "player":
        player = this.physics.add.sprite(item.x, item.y, item.type);
        break;

      case "star":
        stars.create(item.x, item.y, item.type);
        break;

      default:
        platforms.create(item.x, item.y, item.type);
        break;
    }
  }

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  this.physics.add.collider(player, platforms);

  cursors = this.input.keyboard.createCursorKeys();

  this.anims.create({
    key: "still",
    frames: [{ key: "player", frame: 4 }],
    frameRate: 20,
  });

  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("player", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("player", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });

  this.physics.add.collider(stars, platforms);

  this.physics.add.overlap(player, stars, (player, star) => {}, null, this);

  this.physics.add.overlap(
    player,
    stars,
    (player, star) => {
      star.disableBody(true, true);
      score += 1;
      scoreText.setText("Stars: " + score);
    },
    null,
    this
  );
}

function update() {
  if (cursors.left.isDown) {
    player.setVelocityX(-160);
    player.anims.play("left", true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(160);
    player.anims.play("right", true);
  } else {
    player.setVelocityX(0);
    player.anims.play("still");
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
  }

  let scrol_x = player.x - game.config.width / 2;
  let scrol_y = player.y - game.config.height / 2;

  this.cameras.main.scrollX = scrol_x; ///  scrollX - Х top left point of camera
  this.cameras.main.scrollY = scrol_y; ///  scrollY - Y top left point of camera
}
