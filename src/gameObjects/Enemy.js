import increaseScore from '../ui/increaseScore';

class Enemy {
    constructor(scene) {
        this.scene = scene;
        this.enemies = this.scene.physics.add.group();
        this.collider = this.scene.physics.add.collider(this.scene.player.sprite, this.enemies, this.gameOver, null, this);

        const enemyObjects = this.scene.map.getObjectLayer('enemies').objects;

        for (const enemy of enemyObjects) {
            this.enemies.create(enemy.x, enemy.y - enemy.height, 'enemies', 'snailwalk1')
                .setScale(1.5)
                .setOrigin(0)
                .setDepth(-1);
        }

        for (const enemy of this.enemies.children.entries) {
            enemy.direction = 'RIGHT';
            enemy.isDed = false;
        }
    }

    collideWith(gameObject) {
        this.scene.physics.add.collider(this.enemies, gameObject);

        return this;
    }

    update() {
        for (const enemy of this.enemies.children.entries) {
            if (enemy.body.blocked.right) {
                enemy.direction = 'LEFT';
            }

            if (enemy.body.blocked.left) {
                enemy.direction = 'RIGHT';
            }

            if (enemy.direction === 'RIGHT') {
                enemy.setVelocityX(100).setFlipX(true);
            } else {
                enemy.setVelocityX(-100).setFlipX(false);
            }

            !enemy.isDed && enemy.play('enemyRun', true);
        }
    }

    gameOver() {
        // PHEW
        if (this.scene.player.sprite.body.touching.down) {
            this.die();

            return;
        }

        this.scene.player.die();
        this.scene.input.keyboard.shutdown();

        this.scene.physics.world.removeCollider(this.scene.player.collider);
        this.scene.physics.world.removeCollider(this.collider);

        setTimeout(() => {
            this.scene.scene.start('GameOver');
        }, 1500);
    }

    die() {
        for (const enemy of this.enemies.children.entries) {
            if (enemy.body.touching.up) {
                enemy.isDed = true;
                enemy.play('enemyDie', true);
                enemy.on('animationcomplete', () => enemy.destroy());

                increaseScore(.5);

                this.scene.player.sprite.setVelocity(0, -350);
                this.scene.player.sprite.play('jump');
            };
        }
    }
}

export default Enemy;
