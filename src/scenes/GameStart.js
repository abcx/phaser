import { get } from "../commons/storage";

class GameStart extends Phaser.Scene {

    constructor () {
        super('GameStart');
    }

    create() {
        let cnv = document.querySelector('canvas');
        cnv.style.opacity = 0;

        // console.log('>>> SCORES', get("platform"));

        this.input.once(
            "pointerdown",
            function (event) {
                cnv.style.opacity = 1;
                document.querySelector('.game-start').classList.remove('visible');
                document.querySelector('#stage').classList.remove('visible');
                this.scene.start("Level_000");
            },
            this
        );
    }
}

export default GameStart;