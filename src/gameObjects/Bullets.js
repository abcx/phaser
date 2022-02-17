import Bullet from './Bullet';

export default class Bullets extends Phaser.Physics.Arcade.Group {
  constructor(scene, view, count = 5) {
    super(scene.physics.world, scene);

    this.createMultiple({
      frameQuantity: count,
      key: view,
      active: false,
      visible: false,
      classType: Bullet,
    });
  }

  fireBullet(x, y) {
    let bullet = this.getFirstDead(false);

    if (bullet) {
      bullet.fire(x, y);
    }
  }
}
