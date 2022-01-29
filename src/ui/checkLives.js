export const checkLives = () => {
  const liveElement = document.getElementsByClassName("lives-amount")[0];
  return Number(liveElement.innerText) > 0;
};
