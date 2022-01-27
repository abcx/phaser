class GameStart extends Phaser.Scene {

    constructor () {
        super('GameStart');
    }

    create() {
        let cnv = document.querySelector('canvas');
        cnv.style.opacity = 0;

        this.input.once(
            "pointerdown",
            function (event) {
                cnv.style.opacity = 1;
                document.getElementsByClassName('game-start')[0].classList.remove('visible');
                document.querySelector('#stage').classList.remove('start-page');
                this.scene.start("Level_000");
            },
            this
        );
    }
}

export default GameStart;