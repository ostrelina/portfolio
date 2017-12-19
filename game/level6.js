var level6={
    preload:function(){
        game.load.image("vaza","vaza.jpg")
        game.load.image("right","right.png")
        game.load.image("btn","pis.png")
},
    right:null,
    btn:null,
    create:function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL
        game.add.image(0,-150,'vaza')
       this.pis=game.add.button(800,700,'btn',this.show);
        this.right = game.add.button(0,450, 'right', this.actionOnClick2)
        
},
    actionOnClick2:function(){
        game.state.start("level5");
    },
    show:function(){
        game.state.start("level7")
},

    update:function(){
        
    }
}