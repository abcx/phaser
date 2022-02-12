import increaseScore from "../ui/increaseScore";
import gameOver from "../commons/game-over";
import { getTilesetData, checkGid } from "../commons/checkGid";
import {
  getLayersNames,
  getFrameNamesFromAtlas,
} from "../commons/getLayersNames";
import levelsConf from "../config/levels.conf";

const LEFT = 'LEFT';
const RIGHT = 'RIGHT';

class Enemy {
  enemiesSpeed = 75;

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

    // get all layer with enemies
    let enemiesLayersNames = getLayersNames(this.scene, "enemies");

    // get enemies' objects from layers
    let enemiesLayers = enemiesLayersNames.map((layerName) => {
      return this.scene.map.getObjectLayer(layerName).objects;
    });
    // console.log('ENEMIES', enemiesLayersNames, enemiesLayers)

    // let { firstGids, tilesets } = getTilesetData(this.scene);
    // let tile;
    let enemyType;

    const frames = getFrameNamesFromAtlas(this.scene, "enemies");

    // create enemies
    for (let layer in enemiesLayers) {
      for (const enemy of enemiesLayers[layer]) {
        // tile = checkGid(firstGids, tilesets, enemy.gid);

        switch (enemy.gid) {
          case 1:
            enemyType = frames[2];
            break;
          case 2:
            enemyType = frames[0];
            break;
        }

        this.enemies
          .create(enemy.x, enemy.y - enemy.height, "enemies", enemyType)
          .setName(enemyType)
          .setScale(1.5)
        //   .setOrigin(0)
          .setDepth(-1);
      }
    }

    for (const enemy of this.enemies.children.entries) {
      enemy.direction = RIGHT;
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
        enemy.direction = LEFT;
      }

      if (enemy.body.blocked.left) {
        enemy.direction = RIGHT;
      }

      if (enemy.direction === RIGHT) {
        enemy.setVelocityX(this.enemiesSpeed).setFlipX(true);
      } else {
        enemy.setVelocityX(-this.enemiesSpeed).setFlipX(false);
      }

      // play enemies animations
      levelsConf[this.scene.scene.key].enemiesNames.forEach(
        (enemyName, idx) => {
          if (enemy.name === `${enemyName}${idx + 1}`) {
            !enemy.isDed && enemy.play(`enemyRun_${enemyName}`, true);
          }
        }
      );
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
    const animNames = Object.keys(this.scene.anims.anims.entries);
    let currentEnemyAnim;

    for (const enemy of this.enemies.children.entries) {
      if (enemy.body.touching.up) {
        enemy.isDed = true;

        // find proper enemy die anim name
        currentEnemyAnim = animNames.find(
          (name) => enemy.name.indexOf(name.split("_")[1]) !== -1
        );

        enemy.play(currentEnemyAnim.replace("Run", "Die"), true);
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
