import resetScore from '../ui/resetScore';

export default function gameOver(scene, collider) {

    scene.player.die();
    scene.input.keyboard.shutdown();

    scene.physics.world.removeCollider(scene.player.collider);
    scene.physics.world.removeCollider(collider);

    // setTimeout(() => {
    //     scene.scene.start('GameOver');
    // }, 1500);

    // shake the camera
    scene.cameras.main.shake(500);
    // fade camera
    scene.time.delayedCall(250, function() {
        scene.cameras.main.fade(250);
    }, [], this);
    // restart game
    scene.time.delayedCall(500, function() {
        resetScore();
        scene.scene.restart();
    }, [], this);
    // reset camera effects
    scene.cameras.main.resetFX();
};