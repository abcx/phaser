import levelsConf from "../config/levels.conf";

export default class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, view) {
    super(scene, x, y, view);
    this.scene = scene;
    this.tileSize = levelsConf[scene.scene.key].tileSize;
  }

  fire(x, y) {
    this.body.setAllowGravity(false).reset(x, y);

    this.setScale(0.25);
    this.setActive(true);
    this.setVisible(true);
    this.setVelocityX(500);
    this.setBlendMode(Phaser.BlendModes.ADD);
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    if (
      this.x > this.scene.scale.width ||
      this.x < -this.tileSize ||
      this.y < -this.tileSize ||
      this.y > this.scene.scale.height
    ) {
      this.setActive(false);
      this.setVisible(false);
    }
    // console.log(this.x, this.y);
  }
}
