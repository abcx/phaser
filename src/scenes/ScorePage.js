import { set, get } from "../commons/storage";
import { hideCanvas } from "../ui/canvas";
import readScore from "../ui/readScore";

class ScorePage extends Phaser.Scene {
  constructor() {
    super("ScorePage");
  }

  create() {
    hideCanvas();

    // stop music
    this.sound.stopAll();

    // set("platform", JSON.stringify([{player: 'A', score: 4}, {player: 'B', score: 2}]));

    document.querySelector("#stage").classList.add("visible");
    document.querySelector(".score-page").classList.add("visible");

    const prompt = document.querySelector("#prompt");
    const input = prompt.querySelector("input");
    const form = document.querySelector("form");

    prompt.classList.add("visible");
    input.focus();

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // get player name from prompt
      const playerName = input.value;

      if (!!playerName) {
        prompt.classList.remove("visible");

        // read score
        const score = readScore();

        // read top scores
        let topScores = get("platform");

        if (topScores) {
          // read top list
          topScores = JSON.parse(topScores);

          // add current player score
          topScores.push({ player: playerName, score });

          // create HTML top list
          topScores = createTopList(topScores);

          // save top scores
          set("platform", JSON.stringify(topScores));

          console.log("loaded", get("platform"), { topScores });

          // check for mouse pointer
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
    });
  }
}

const createTopList = (scores) => {
  const ul = document.querySelector(".score-page ul");

  if (ul.querySelectorAll("li").length) {
    return scores;
  }

  let li;
  let out = [];

  scores.sort((a, b) => b.score - a.score);

  for (let i = 0; i < 10; i++) {
    li = document.createElement("li");

    if (scores[i]) {
      li.textContent = `${i + 1}) ${scores[i].player} - ${scores[i].score}`;
      out.push({
        player: scores[i].player,
        score: scores[i].score,
      });
    } else {
      out.push({
        player: "",
        score: 0,
      });
    }
    ul.appendChild(li);
  }
  return out;
};

export default ScorePage;
