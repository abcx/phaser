export const decreaseLives = () => {
  const liveElement = document.getElementsByClassName("lives-amount")[0];
  const currentLive = Number(liveElement.innerText);
  let lives = currentLive - 1;
  liveElement.innerText = lives < 0 ? 0 : lives;
};