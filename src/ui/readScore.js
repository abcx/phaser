export default function readScore() {
    const scoreElement = document.getElementsByClassName('score-amount')[0];
    return Number(scoreElement.innerText);
};