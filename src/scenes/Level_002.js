import preload from "../commons/preload";
import create from "../commons/create";
import update from "../commons/update";

class Level_002 extends Phaser.Scene {
  constructor() {
    super("Level_002");
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
export default Level_002;
