import { set, get } from "../commons/storage";
import { hideCanvas } from "../ui/canvas";
import readScore from "../ui/readScore";

class ScorePage extends Phaser.Scene {
  constructor() {
    super("ScorePage");
  }

  create() {
    // create(this);

    hideCanvas();

    // stop music
    this.sound.stopAll();

    document.querySelector("#stage").classList.add("visible");
    document.querySelector(".score-page").classList.add("visible");

    // read score
    const score = readScore();

    // read top scores
    let topScores = get("platform");

    if (topScores) {
      topScores = JSON.parse(topScores);
    }

    // get player name
    const playerName = "C";

    // create top list
    topScores = createTopList({ player: playerName, score }, topScores);

    // save top scores
    set("platform", JSON.stringify(topScores));

    console.log({ topScores }, JSON.parse(get("platform")));

    this.input.once(
      "pointerdown",
      function (event) {
        document.querySelector(".score-page").classList.remove("visible");
        document.querySelector("#stage").classList.remove("score-page");
        this.scene.start("GameOver");
      },
      this
    );
  }
}

const createTopList = (playerScore, topScores) => {
  const ul = document.querySelector(".score-page ul");
  let li;

  let scores = topScores.concat(playerScore).sort((a, b) => a.score < b.score);

  for (let i = 1; i < 11; i++) {
    li = document.createElement("li");

    if (scores[i]) {
      li.textContent = `${i}) ${scores[i].player} - ${scores[i].score}`;
    }
    ul.appendChild(li);
  }
  console.log({ playerScore, topScores, scores }, scores.slice(9));
  return scores; //.slice(9);
};

export default ScorePage;
