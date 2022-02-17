export function flares(particles) {
  return particles.createEmitter({
    x: 400,
    y: 300,
    scale: 0.5,
    speed: 200,
    blendMode: Phaser.BlendModes.ADD,
  });
}

export function flame(particles) {
  return particles.createEmitter({
    x: 400,
    y: 300,
    scale: { start: 1, end: 0 },
    speed: { min: 50, max: 100 },
    angle: { min: 0, max: -180 },
    rotate: { min: 0, max: 360 },
    alpha: 0.5,
    blendMode: Phaser.BlendModes.ADD,
    lifespan: 3000,
  });
}

export function comet(particles) {
  return particles.createEmitter({
    x: 600,
    y: 100,
    angle: { min: 140, max: 180 },
    scale: { start: 0.5, end: 0 },
    speed: 400,
    gravityY: 200,
    lifespan: { min: 1000, max: 2000 },
    blendMode: Phaser.BlendModes.ADD,
  });
}

export function explode(particles, target) {
  return particles.createEmitter({
    x: target.x,
    y: target.y,
    speed: { min: -800, max: 800 },
    angle: { min: 0, max: 360 },
    scale: { start: 0.5, end: 0, ease: 'Power3' },
    blendMode: "SCREEN",
    //active: false,
    lifespan: 600,
    gravityY: 800,
  });
}

export function stop(scene, emitter, time = 350) {
  scene.time.delayedCall(time, () => {
    emitter.stop();
  });
}
