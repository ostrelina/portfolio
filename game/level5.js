var level5={
    preload:function(){
       game.load.image("ar","archiv.png");
       game.load.image("left","left.png");
        game.load.image("right","right.png")
        
    },
    ar:null,
    left:null,
    right:null,
    create:function(){
         game.physics.startSystem(Phaser.Physics.ARCADE);
        game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL
        this.ar=game.add.image(0,0,'ar')
        this.ar.scale.setTo(1.7)
        
        this.left = game.add.button(1450,450, 'left', this.actionOnClick)
        this.right = game.add.button(0,450, 'right', this.actionOnClick2)
    },
    actionOnClick:function(){
        game.state.start("level6")
    },
    actionOnClick2:function(){
        game.state.start("level4")
    },
    update:function(){
        
    }
}