export default function create(scene) {
  scene.player.update(scene.inputs);
  scene.enemies.update();
  // scene.coins.update();
  scene.debugger.debuggerEnabled && scene.debugger.update();
}
