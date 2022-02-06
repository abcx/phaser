import resetScore from '../ui/resetScore';
import { decreaseLives } from '../ui/decreaseLives';
import { checkLives } from '../ui/checkLives';

export default function gameOver(scene, collider) {

    const playerDied = scene.player.die();
    scene.input.keyboard.shutdown();

    if (playerDied) {
        decreaseLives();
    }

    scene.physics.world.removeCollider(scene.player.collider);
    scene.physics.world.removeCollider(collider);

    // shake the camera
    scene.cameras.main.shake(500);

    // play sound
    scene.fx.playerHit.play();

    // stop music
    scene.fx.musicGame.stop();

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
            scene.scene.start('ScorePage');
        }

    }, 2534);
};