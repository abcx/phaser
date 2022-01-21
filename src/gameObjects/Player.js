import resetScore from '../ui/resetScore';
import levelsConf from "../config/levels.conf";

class Player {
    constructor(scene, x, y) {
        const useDeadZone = false;

        this.scene = scene;

        // By using an object in tiled, you could also dynamically define the spawn point
        this.sprite = scene.physics.add.sprite(x, y, 'atlas');

        // this.sprite.setCollideWorldBounds(true);
        this.sprite.isDed = false;

        scene.cameras.main
            .setBounds(0, 0, scene.map.widthInPixels, scene.map.heightInPixels)
            .startFollow(this.sprite);

        if (useDeadZone) {
            scene.cameras.main.setDeadzone(scene.game.config.width / 4, scene.game.config.height)
        }

        return this;
    }

    collideWith(gameObject) {
        console.log(gameObject)
        this.collider = this.scene.physics.add.collider(this.sprite, gameObject, this.checkTileType, null, this);
        return this;
    }

    checkTileType(player, tile) {
        console.log('checkTileType', tile.index)
        const T = levelsConf[this.scene.level].tileNames;

        switch (tile.index) {
            case T.LAVA:
            case T.WATER:
                this.gameOver();
                break;
        }
    }

    gameOver() {
        this.scene.player.die();
        this.scene.input.keyboard.shutdown();

        this.scene.physics.world.removeCollider(this.scene.player.collider);
        this.scene.physics.world.removeCollider(this.collider);

        // shake the camera
        this.scene.cameras.main.shake(500);
        // fade camera
        this.scene.time.delayedCall(250, function() {
            this.scene.cameras.main.fade(250);
        }, [], this);
        // restart game
        this.scene.time.delayedCall(500, function() {
            resetScore();
            this.scene.scene.restart();
        }, [], this);
        // reset camera effects
        this.scene.cameras.main.resetFX();
    }

    reFollowPlayer() {
        this.scene.physics.world.bounds.setPosition(this.scene.cameras.main.worldView.x, 0);

        if (this.sprite.body.position.x + this.sprite.body.width / 2 > this.scene.cameras.main.midPoint.x &&
            !this.scene.cameras.main._follow) {
            this.scene.cameras.main.startFollow(this.sprite);
        }
    }

    update(input) {
        if (input.left.isDown) {
            this.sprite.setVelocityX(-200).setFlipX(true);
            this.sprite.body.onFloor() &&
            !this.sprite.isDed && this.sprite.play('run', true);
            this.scene.cameras.main.stopFollow(this.sprite);

        } else if (input.right.isDown) {
            this.sprite.setVelocityX(200).setFlipX(false);
            this.sprite.body.onFloor() &&
            !this.sprite.isDed && this.sprite.play('run', true);
            this.reFollowPlayer();

        } else {
            this.sprite.setVelocityX(0);
            this.sprite.body.onFloor() &&
            !this.sprite.isDed && this.sprite.play('idle', true);
        }

        if ((input.space.isDown && this.sprite.body.onFloor())) {
            this.sprite.setVelocityY(-700);
            this.sprite.play('jump', true);
        }
    }

    die() {
        this.sprite.isDed = true;
        this.sprite.setVelocity(0, -350);
        this.sprite.play('die', true);
        this.sprite.setCollideWorldBounds(false);
    }
}

export default Player;