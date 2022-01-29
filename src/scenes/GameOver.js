import { showCanvas } from "../ui/canvas";

class GameOver extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  create() {
    this.cameras.main.setBackgroundColor("#000");
    showCanvas();
    document.querySelector(".game-over").classList.add("visible");
  }
}

export default GameOver;
