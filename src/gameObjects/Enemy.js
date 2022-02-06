import increaseScore from "../ui/increaseScore";
import gameOver from "../commons/game-over";
import { getTilesetData, checkGid } from "../commons/checkGid";

class Enemy {
  constructor(scene) {
    this.scene = scene;
    this.enemies = this.scene.physics.add.group();
    this.collider = this.scene.physics.add.collider(
      this.scene.player.sprite,
      this.enemies,
      this.gameOver,
      null,
      this
    );

    const enemyObjects1 = this.scene.map.getObjectLayer("enemies1").objects;
    const enemyObjects2 = this.scene.map.getObjectLayer("enemies2").objects;

    // let { firstGids, tilesets } = getTilesetData(this.scene);

    // for (const enemy of enemyObjects1) {
    //   const tile = checkGid(firstGids, tilesets, enemy.gid);

    //   this.enemies
    //     .create(enemy.x, enemy.y, tile.key, tile.gid)
    //     .setScale(1.5)
    //     .setOrigin(0)
    //     .setDepth(-1);
    // }

    // for (const enemy of enemyObjects2) {
    //   const tile = checkGid(firstGids, tilesets, enemy.gid);

    //   this.enemies
    //     .create(enemy.x, enemy.y, tile.key, tile.gid)
    //     .setScale(1.5)
    //     .setOrigin(0)
    //     .setDepth(-1);
    // }

    for (const enemy of enemyObjects1) {
      this.enemies
        .create(enemy.x, enemy.y - enemy.height, "enemies1", "snailwalk1")
        .setScale(1.5)
        .setOrigin(0)
        .setDepth(-1);
    }
    for (const enemy of enemyObjects2) {
      this.enemies
        .create(enemy.x, enemy.y - enemy.height, "enemies2", "slimewalk1")
        .setScale(1.5)
        .setOrigin(0)
        .setDepth(-1);
    }

    for (const enemy of this.enemies.children.entries) {
      enemy.direction = "RIGHT";
      enemy.isDed = false;
    }
  }

  collideWith(gameObject) {
    this.scene.physics.add.collider(this.enemies, gameObject);

    return this;
  }

  update() {
    for (const enemy of this.enemies.children.entries) {
      if (enemy.body.blocked.right) {
        enemy.direction = "LEFT";
      }

      if (enemy.body.blocked.left) {
        enemy.direction = "RIGHT";
      }

      if (enemy.direction === "RIGHT") {
        enemy.setVelocityX(100).setFlipX(true);
      } else {
        enemy.setVelocityX(-100).setFlipX(false);
      }

      !enemy.isDed && enemy.play("enemy1Run", true);
      !enemy.isDed && enemy.play("enemy2Run", true);
    }
  }

  gameOver() {
    if (this.scene.player.sprite.body.touching.down) {
      this.die();
      return;
    }
    gameOver(this.scene, this.collider);
  }

  die() {
    for (const enemy of this.enemies.children.entries) {
      if (enemy.body.touching.up) {
        enemy.isDed = true;
        enemy.play("enemyDie", true);
        enemy.on("animationcomplete", () => enemy.destroy());

        increaseScore(1);

        this.scene.player.sprite.setVelocity(0, -350);
        this.scene.player.sprite.play("jump");
        this.scene.fx.enemyHit.play();
      }
    }
  }
}

export default Enemy;
