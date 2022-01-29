export const hideCanvas = () => {
  let cnv = document.querySelector("canvas");
  cnv.style.opacity = 0;
};

export const showCanvas = () => {
  let cnv = document.querySelector("canvas");
  cnv.style.opacity = 1;
};
