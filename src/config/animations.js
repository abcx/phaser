import levelsConf from "../config/levels.conf";

export default (scene) => {
  // Player animations
  scene.anims.create({
    key: "run",
    frames: scene.anims.generateFrameNames("atlas", {
      prefix: "player",
      start: 3,
      end: 4,
    }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: "idle",
    frames: [{ key: "atlas", frame: "player2" }],
    frameRate: 10,
  });

  scene.anims.create({
    key: "jump",
    frames: [{ key: "atlas", frame: "player2" }],
    frameRate: 10,
  });

  scene.anims.create({
    key: "die",
    frames: [{ key: "atlas", frame: "player1" }],
    frameRate: 10,
  });

  // Enemies' animations
  levelsConf[scene.scene.key].enemiesNames.forEach((enemyName, idx) => {
    scene.anims.create({
      key: `enemyRun_${enemyName.name}`,
      frames: scene.anims.generateFrameNames("enemies", {
        prefix: enemyName.name,
        start: 1,
        end: 2,
      }),
      frameRate: 15,
      repeat: -1,
    });

    scene.anims.create({
        key: `enemyDie_${enemyName}`,
        frames: [{ key: "enemies", frame: `${enemyName}${idx + 1}` }],
        frameRate: 10,
        hideOnComplete: true,
      });
  });

  // Coin
  // scene.anims.create({
  //     key: 'rotate',
  //     frames: scene.anims.generateFrameNames('coingold', {
  //         prefix: 'coin_',
  //         start: 0,
  //         end: 1,
  //     }),
  //     frameRate: 10,
  //     repeat: -1
  // });

  console.log('ANIMS', scene.anims.anims.entries)
};
