export function pulse(scene, item, value = 7, duration = 750) {
  scene.tweens.timeline({
    targets: item,
    repeat: -1,
    tweens: [
      {
        ease: "Sine.easeInOut",
        y: item.y - value,
        offset: 0,
        yoyo: true,
        duration: duration,
      },
      {
        ease: "Sine.easeInOut",
        y: item.y + value,
        offset: 0,
        yoyo: true,
        duration: duration,
      },
    ],
  });
}
