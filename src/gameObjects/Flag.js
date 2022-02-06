import resetScore from "../ui/resetScore";
import levelsConf from "../config/levels.conf";
import increaseLevelNumber from "../commons/increaseLevelNumber";
import rememberScore from "../ui/rememberScore";
import readScore from "../ui/readScore";
import { getTilesetData, checkGid } from "../commons/checkGid";

class Flag {
  constructor(scene) {
    this.scene = scene;
    this.levelEnd = this.scene.physics.add.group({
      immovable: true,
      allowGravity: false,
    });

    const flagElement = this.scene.map.getObjectLayer("flag").objects[0];

    let { firstGids, tilesets } = getTilesetData(this.scene);

    const tile = checkGid(firstGids, tilesets, flagElement.gid);

    this.levelEnd
      .create(
        flagElement.x,
        flagElement.y - flagElement.height,
        tile.key,
        tile.gid
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

        const L = increaseLevelNumber(this.scene);

        if (L) {
          rememberScore(readScore());

          console.log(`Go to ${L}`);

          this.scene.fx.flag.play();

          // fade camera
          this.scene.time.delayedCall(
            250,
            function () {
              this.scene.cameras.main.fade(250);
            },
            [],
            this
          );

          setTimeout((_) => {
            this.scene.fx.musicGame.stop();
            this.scene.scene.start(L);
          }, 2834); // jingel length [ms]
        } else {
          this.scene.scene.start("GameOver");
        }
      }
    }
  }
}

export default Flag;
