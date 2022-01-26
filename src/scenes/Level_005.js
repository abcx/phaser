import preload from "../commons/preload";
import create from "../commons/create";
import update from "../commons/update";

class Level_005 extends Phaser.Scene {
  level = "Level_005";

  constructor() {
    super("Level_005");
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
export default Level_005;
