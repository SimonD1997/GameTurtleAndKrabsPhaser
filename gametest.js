class Gametest extends Phaser.Scene {


    preload() {
        this.load.image('background', 'assets/Spielbrett.png');
        this.load.image('sky', 'assets/sky.png');
        this.load.image("star", "assets/star.png");
        this.load.spritesheet('dude',
            'assets/dude.png',
            {frameWidth: 32, frameHeight: 48});
    }


    create() {



        this.add.image(400, 300, 'background');
        const player = this.add.sprite(100, 450, 'dude',4);

        this.add.image(640, 195, 'star').setOrigin(0, 0);
        this.add.image(640, 320, 'star').setOrigin(0, 0);
        this.add.image(640, 450, 'star').setOrigin(0, 0);

        player.setInteractive({ draggable: true });

        player.on('drag', (pointer, dragX, dragY) => player.setPosition(dragX, dragY));

        let over1 = false;
        let over2 = false;
        let over3 = false;

        //  The following code just checks to see if the gameObject is over
        //  a zone when the drag ends and if so, we change frame and disable it

        this.input.on('dragend', (pointer, player) => {

            const x = player.x;
            const y = player.y;

            console.log(x < 660 );
            console.log(x > 630 );
            console.log(y > 440 );
            console.log(y < 460);
            if (x < 670 && x > 610 && y > 155 && y < 235 )
            {
                //over1 = true;
                //player.setFrame(0);
                player.setPosition(650, 195);
                //player.disableInteractive();
            }
            else if (x < 670 && x > 610  && y > 280 && y < 360 )
            {
                //over2 = true;
                //player.setFrame(0);
                player.setPosition(650, 320);
                //player.disableInteractive();
            }
            else if (x < 670 && x > 610 && y > 420 && y < 480 )
            {
                //over3 = true;
                //player.setFrame(0);
                player.setPosition(650, 450);
                //player.disableInteractive();
            }

        });

    }

    update() {






    }

}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade'
    },
    scene: Gametest
};

const game = new Phaser.Game(config);