export default score => {
    const scoreElement = document.getElementsByClassName('score-amount')[0];
    const stageElement = document.querySelector('#stage');
    scoreElement.innerText = stageElement.dataset.score || 0;
};