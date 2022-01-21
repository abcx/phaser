import preload from "../commons/preload";
import create from "../commons/create";
import update from "../commons/update";

class Level_000 extends Phaser.Scene {
  level = "Level_000";

  constructor() {
    super("Level_000");
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
export default Level_000;
