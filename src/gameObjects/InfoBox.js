import levelsConf from "../config/levels.conf";
import puzzles from "../ui/puzzles";
import increaseScore from "../ui/increaseScore";

class InfoBox {
  constructor(scene) {
    let idx = 0;
    this.openedBoxes = [];
    this.dialog = document.querySelector("#dialog");
    this.dialogText = this.dialog.querySelector("p");
    this.dialogAnswers = this.dialog.querySelector("ul");
    this.scene = scene;

    this.infoBox = this.scene.physics.add.group({
      immovable: true,
      allowGravity: false,
    });

    const infoElement = !!this.scene.map.getObjectLayer("info")
      ? this.scene.map.getObjectLayer("info").objects
      : [];

    for (const box of infoElement) {
      this.infoBox
        .create(
          box.x,
          box.y,
          `${this.scene.level}-tiles`,
          levelsConf[this.scene.level].tileNames.INFO_BOX
        )
        .setName(`box${idx}`)
        .setOrigin(0, 1)
        .setDepth(-1);

      idx++;
    }
  }

  collideWith(gameObject) {
    this.scene.physics.add.overlap(
      this.infoBox,
      gameObject,
      this.openDialog,
      null,
      this
    );
    return this;
  }

  openDialog(player, tile) {
    const puzzle = puzzles[this.scene.level][tile.name];

    if (
      this.openedBoxes.indexOf(tile.name) === -1 &&
      !this.scene.player.collidingTile &&
      !!puzzle
    ) {
      this.dialogText.textContent = puzzle.text;
      this.createAnswersElements(tile.name, puzzle.answers, puzzle.correct);
      this.dialog.classList.add("visible");
      this.scene.player.collidingTile = tile;
      this.scene.fx.openDialog.play();
    }
  }

  closeDialog() {
    this.scene.player.collidingTile = null;
    this.dialog.classList.remove("visible");
    // this.scene.fx.openDialog.play();
  }

  createAnswersElements(tileName, answers, correct) {
    let charCode = 65;
    this.dialogAnswers.innerHTML = "";

    answers.forEach((answer, i) => {
      let li = document.createElement("li");

      li.innerHTML = `<span>${String.fromCharCode(
        charCode + i
      )})</span> ${answer}`;

      li.dataset.idx = i;

      li.addEventListener("click", (e) => {
        if (Number(e.target.dataset.idx) === correct) {
          e.target.classList.add("correct");
          increaseScore(5);
        } else {
          e.target.classList.add("wrong");
        }

        setTimeout((_) => {
          this.openedBoxes.push(tileName);
          this.closeDialog();
        }, 1000);
      });

      this.dialogAnswers.appendChild(li);
    });
  }

  update() {
    this.infoBox.children.entries.forEach((box) => {
      if (this.scene.player.collidingTile) {
        if (this.scene.player.collidingTile === box && box.body.touching.none) {
          this.closeDialog();
        }
      }
    });
  }
}

export default InfoBox;
