import levelsConf from "../config/levels.conf";

export default function increaseLevelNumber(scene) {
  const levels = Object.keys(levelsConf);
  let levelNumber = Number(scene.level.split("_")[1]);
  levelNumber = String(++levelNumber);

  for (let i = 2; i < 4; i++) {
    if (levelNumber.length < i) {
      levelNumber = "0" + levelNumber;
    }
  }
  const levelName = `Level_${levelNumber}`;

  if (levels.indexOf(levelName) === -1) {
    return null;
  }
  return levelName;
}
