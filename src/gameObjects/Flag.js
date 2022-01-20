import resetScore from '../ui/resetScore';

class Flag {
  constructor(scene) {
    this.scene = scene;
    this.levelEnd = this.scene.physics.add.group({
        immovable: true,
        allowGravity: false
    });
    // this.levelEnd = this.scene.physics.add.group();
    // this.collider = this.scene.physics.add.collider(
    //   this.scene.player.sprite,
    //   this.flag,
    //   this.achieveEndOfLevel,
    //   null,
    //   this
    // );

    const flagElement = this.scene.map.getObjectLayer('flag').objects[0];

    this.levelEnd.create(flagElement.x, flagElement.y - flagElement.height, `${this.scene.level}-tiles`, 22)
                .setOrigin(0)
                .setDepth(-1);
  }

  collideWith(gameObject) {
    this.scene.physics.add.overlap(this.levelEnd, gameObject, this.achieveEndOfLevel, null, this);

    return this;
  }

  achieveEndOfLevel(player, tile) {
    for (const le of this.levelEnd.children.entries) {
        if (!le.body.touching.none && player.x - tile.x > 35) {
            le.body.setEnable(false);
            this.scene.input.keyboard.shutdown();
            resetScore();
            this.scene.scene.start("Level_002");
        }
    }
  }
}

export default Flag;
