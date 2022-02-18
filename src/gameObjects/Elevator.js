import { getTilesetData, checkGid } from "../commons/checkGid";
import levelsConf from "../config/levels.conf";

class Elevator {
  constructor(scene) {
    this.scene = scene;
    // Or you can simply say staticGroup, to make them immovable an not affected by gravity
    this.elevators = this.scene.physics.add.group({
      immovable: true,
      allowGravity: false,
    });

    // You could also use the same object layer and differentiate between different objects by custom properties
    const layer = this.scene.map.getObjectLayer("elevators");

    if (!layer) {
      return false;
    }
    const elevatorsObjects = layer.objects;

    let { firstGids, tilesets } = getTilesetData(this.scene);

    for (const elevator of elevatorsObjects) {
      const tile = checkGid(firstGids, tilesets, elevator.gid);

      this.elevators
        .create(elevator.x, elevator.y, tile.key, tile.gid)
        .setOrigin(0, 1)
        // .setImmovable(true)
        .setDepth(-1);
    }

    let idx = 0;
    let config;

    for (const elevator of this.elevators.children.entries) {
      elevator.body.setAllowGravity(false);

      if (!!levelsConf[scene.scene.key].elevators[idx]) {
        config = levelsConf[scene.scene.key].elevators[idx];
      } else {
        config = levelsConf[scene.scene.key].elevators[0];
      }

      this.scene.tweens.timeline({
        targets: elevator.body.velocity,
        loop: -1,
        tweens: [
          {
            // speed
            y: -config.speed,
            // distance
            duration: config.distance,
            // easing
            ease: "Stepped",
          },
          {
            // speed
            y: config.speed,
            // distance
            duration: config.distance,
            // easing
            ease: "Stepped",
          },
        ],
      });

      idx++;
    }
  }

  collideWith(gameObject) {
    this.scene.physics.add.collider(
      this.elevators,
      gameObject,
      this.collide,
      null,
      this
    );
    return this;
  }

  collide(player) {
    for (const elevator of this.elevators.children.entries) {
      if (
        elevator.body.moves &&
        elevator.body.touching.up &&
        player.body.touching.down
      ) {
        player.setGravityY(2000);
        console.log(player.body.touching.down, elevator.body.touching.up);
      }
    }
  }
}

export default Elevator;
