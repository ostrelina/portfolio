var level1={
    preload:function(){
         game.load.image("home", "home.jpg");
        game.load.image("button","1.gif")
        
    },
    button:null,
    home:null,
    zal:null,
    create:function(){
        game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL
        game.add.sprite(0, 0, 'home');
        
        this.button = game.add.button(game.world.centerX - 10, 700, 'button', this.actionOnClick)
         
    },
    actionOnClick:function(){
        game.state.start('level2');
    },
    update:function(){
        
    }
};