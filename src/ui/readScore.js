export default function readScore() {
    const scoreElement = document.querySelector('.score-amount');
    return Number(scoreElement.innerText);
};