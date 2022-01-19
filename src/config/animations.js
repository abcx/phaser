// To make things cleaner, you can also replace this with a json file
// Or introduce helper functions for generating the repeating patterns
export default scene => {
    // Player
    scene.anims.create({
        key: 'run',
        frames: scene.anims.generateFrameNames('atlas', {
            prefix: 'player',
            start: 3,
            end: 4,
        }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'idle',
        frames: [{ key: 'atlas', frame: 'player2' }],
        frameRate: 10
    });

    scene.anims.create({
        key: 'jump',
        frames: [{ key: 'atlas', frame: 'player2' }],
        frameRate: 10
    });

    scene.anims.create({
        key: 'die',
        frames: [{ key: 'atlas', frame: 'player1' }],
        frameRate: 10
    });

    // Enemy
    scene.anims.create({
        key: 'enemyRun',
        frames: scene.anims.generateFrameNames('enemies', {
            prefix: 'snailwalk',
            start: 1,
            end: 2,
        }),
        frameRate: 15,
        repeat: -1
    });

    // scene.anims.create({
    //     key: 'enemyDie',
    //     frames: [{ key: 'enemies', frame: 'enemy_0' }],
    //     frameRate: 10,
    //     hideOnComplete: true
    // });

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
};