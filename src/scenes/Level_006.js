import preload from "../commons/preload";
import create from "../commons/create";
import update from "../commons/update";

class Level_006 extends Phaser.Scene {
  level = "Level_006";

  constructor() {
    super("Level_006");
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
export default Level_006;
