export default function create(scene) {
  scene.player.update(scene.inputs);
  scene.enemies.update();
  scene.infoBox.update();
  // scene.coins.update();
  scene.debugger.debuggerEnabled && scene.debugger.update();
//   scene.bullet.x++;
//   scene.bullet.y = scene.player.sprite.y;
}
