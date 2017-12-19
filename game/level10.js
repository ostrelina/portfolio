var level10 = {
    preolad: function () {
         game.load.image("keys","keys.jpg");
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_A
        game.add.image(100, 200, 'keys')
    },
    update: function () {

    }
}
