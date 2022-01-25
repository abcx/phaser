export default function rememberScore(currentScore) {
    const stageElement = document.querySelector('#stage');
    let previousScore = 0;

    if (stageElement.dataset.score) {
        previousScore = Number(stageElement.dataset.score);
    } else {
        stageElement.dataset.score = 0;
    }

    stageElement.dataset.score = previousScore + currentScore;
};