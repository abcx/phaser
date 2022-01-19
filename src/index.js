
import Phaser from 'phaser'

import Game from './scenes/Game.js'
import GameOver from './scenes/GameOver.js'

import './assets/scss/index.scss'

const config = {
    width: 840,
    height: 700,
    parent: 'stage',
    backgroundColor: '#FFFFAC',
    title: 'Tilemap',
    // url: 'webtips.dev2',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            // debug: true, // Set it to true if you want debugger enabled by default
            gravity: {
                y: 1000
            }
        }
    },
    scene: [
        Game,
        GameOver
    ]
};

new Phaser.Game(config);