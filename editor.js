import { assets } from "./assets";
import * as SETTINGS from "./game-settings.json";
import * as level from "./level.json";

const Editor = (() => {
  let panel;
  let panelTilesCounter = 0;
  let saveBtn;
  let scene;
  let scenePosition;
  let current;
  let currentImage;

  const init = () => {
    getHtmlElements();

    new Promise((resolve) => {
      assets.forEach((_) => {
        loadAsset(`assets/${_}.png`)
          .then((img) => addToPanel(_, img, resolve))
          .catch((err) => console.error(err));
      });
    }).then(_ => {
        createGridElements();
    });

    saveBtn.addEventListener(
      "click",
      (e) => saveTemplateAsFile("level.json", level),
      true
    );
  };

  const loadAsset = (url) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.addEventListener("load", () => resolve(img));
      img.addEventListener("error", (err) => reject(err));
      img.src = url;
    });

  const addToPanel = (name, img, resolve) => {
    console.log(name, `w: ${img.width} | h: ${img.height}`);
    img.dataset.id = name.split(".")[0];
    img.addEventListener("click", onClickPanel, true);
    panel.appendChild(img);

    panelTilesCounter++;
    if (panelTilesCounter === assets.length) {
        resolve(true);
    }
  };

  const getHtmlElements = () => {
    panel = document.querySelector("#panel");
    scene = document.querySelector("#scene");
    saveBtn = panel.querySelector("#save");
    scene.style.width = `${SETTINGS.tileSize * SETTINGS.scene.width}px`;
    scene.style.height = `${SETTINGS.tileSize * SETTINGS.scene.height}px`;
    scenePosition = scene.getBoundingClientRect();
  };

  const createGridElements = () => {
    const allGrids = SETTINGS.scene.width * SETTINGS.scene.height;
    let grid;
    let tile;

    for (let i = 0; i < allGrids; i++) {
      grid = document.createElement("div");
      grid.className = `grid`;
      grid.dataset.id = i;
      grid.addEventListener("click", onGridClick, true);
      console.log(i, level[i]);
      if (level[i]) {
        tile = panel.querySelector(`img[data-id="${level[i].type}"]`);
        grid.appendChild(tile.cloneNode());
      }
      scene.appendChild(grid);
    }
  };

  const onClickPanel = (e) => {
    console.log(`SELECT tile ${e.target.dataset.id}`);
    current = e.target.dataset.id;
    currentImage = e.target;
  };

  const onGridClick = (e) => {
    const id = e.target.dataset.id;
    if (isNaN(Number(id))) {
      return false;
    }
    const pos = e.target.getBoundingClientRect();

    e.target.appendChild(currentImage.cloneNode());

    level[id] = {
      x: pos.left - scenePosition.left - 1,
      y: pos.top - scenePosition.top - 1,
      type: current,
    };

    console.log(`INSERT ${current} on grid ${id}`);
    console.log(level);
  };

  const saveTemplateAsFile = (filename, data) => {
    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "download";
    a.click();
    a.remove();
  };

  return {
    init,
  };
})();

Editor.init();
