import resetScore from "../ui/resetScore";
import levelsConf from "../config/levels.conf";
import increaseLevelNumber from "../commons/increaseLevelNumber";
import rememberScore from '../ui/rememberScore';
import readScore from '../ui/readScore';

class Flag {
  constructor(scene) {
    this.scene = scene;
    this.levelEnd = this.scene.physics.add.group({
      immovable: true,
      allowGravity: false,
    });

    const flagElement = this.scene.map.getObjectLayer("flag").objects[0];

    this.levelEnd
      .create(
        flagElement.x,
        flagElement.y - flagElement.height,
        `${this.scene.level}-tiles`,
        levelsConf[this.scene.level].tileNames.EXIT
      )
      .setOrigin(0)
      .setDepth(-1);
  }

  collideWith(gameObject) {
    this.scene.physics.add.overlap(
      this.levelEnd,
      gameObject,
      this.achieveEndOfLevel,
      null,
      this
    );

    return this;
  }

  achieveEndOfLevel(player, tile) {
    for (const le of this.levelEnd.children.entries) {
      if (!le.body.touching.none && player.x - tile.x > 35) {
        le.body.setEnable(false);
        this.scene.input.keyboard.shutdown();
        // resetScore();
        const L = increaseLevelNumber(this.scene);
        if (L) {
            console.log(`Go to ${L}`);
            rememberScore(readScore());
console.log('score', readScore())
            this.scene.scene.start(L);
        } else {
            scene.scene.start('GameOver');
        }
      }
    }
  }
}

export default Flag;
