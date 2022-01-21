import preload from "../commons/preload";
import create from "../commons/create";
import update from "../commons/update";

class Level_003 extends Phaser.Scene {
  level = "Level_003";

  constructor() {
    super("Level_003");
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
export default Level_003;
