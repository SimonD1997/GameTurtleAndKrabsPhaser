class Example extends Phaser.Scene {


    preload() {
        this.load.image('background', 'assets/Spielbrett.png');
        this.load.image('sky', 'assets/sky.png');
        this.load.image("dude2", "assets/dude.png");
        this.load.spritesheet('dude',
            'assets/dude.png',
            {frameWidth: 32, frameHeight: 48});
    }


    create() {

        this.add.image(400, 300, 'background');
        this.target = new Phaser.Math.Vector2();

        this.player = this.physics.add.sprite(100, 450, 'dude');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        const input = this.input;


        this.input.on('pointerdown', (pointer) => {
            this.target.x = pointer.x;
            this.target.y = pointer.y;

            // Move at 200 px/s:
            this.physics.moveToObject(this.player, this.target, 600,300);
        });
    }

    update() {

        //teleport to position
        //this.player.body.reset(this.target.x, this.target.y);

        // checks if player is on target position --> then stops the movement

        const tolerance = 4;

        const distance = Phaser.Math.Distance.BetweenPoints(this.player, this.target);

        if (this.player.body.speed > 0)
        {

            if (distance < tolerance)
            {
                this.player.body.reset(this.target.x, this.target.y);
            }
        }

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
    scene: Example
};

const game = new Phaser.Game(config);