import preload from "../commons/preload";
import create from "../commons/create";
import update from "../commons/update";

class Level_004 extends Phaser.Scene {
  constructor() {
    super("Level_004");
  }

  preload() {
    preload(this);
  }

  create() {
    create(this);
  }

  update() {
    update(this);
  }
}
export default Level_004;
