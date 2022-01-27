import resetScore from '../ui/resetScore';
import { decreaseLives, checkLives } from '../ui/decreaseLives';

export default function gameOver(scene, collider) {

    decreaseLives();

    scene.player.die();
    scene.input.keyboard.shutdown();

    scene.physics.world.removeCollider(scene.player.collider);
    scene.physics.world.removeCollider(collider);

    // setTimeout(() => {
    //     scene.scene.start('GameOver');
    // }, 1500);

    // shake the camera
    scene.cameras.main.shake(500);

    // play sound
    scene.fx.playerHit.play();

    setTimeout(_ => {
        // fade camera
        scene.time.delayedCall(250, function() {
            scene.cameras.main.fade(250);
        }, [], this);

        if (checkLives()) {
            // restart game
            scene.time.delayedCall(500, function() {
                resetScore();
                scene.scene.restart();
            }, [], scene);
        } else {
            scene.scene.start('GameOver');
        }
        // reset camera effects
        scene.cameras.main.resetFX();
    }, 2534);
};