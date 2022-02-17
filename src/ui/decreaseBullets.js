export const decreaseBullets = () => {
  const bulletsElement = document.querySelector(".bullets-amount");
  const currentBullets = Number(bulletsElement.innerText);
  let bullets = currentBullets - 1;
  bulletsElement.innerText = bullets < 0 ? 0 : bullets;
};