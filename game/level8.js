var level8={
    preload:function(){
       game.load.image("clo","clock.jpg")  
        game.load.image("kub","kub.png")
},
    clo:null,
    kub:null,
    create:function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
          game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL
        this.clo=game.add.image(0,0,'clo')
        this.clo.scale.setTo(1.3)
        this.kub=game.add.button(1500,0,'kub',this.show);
    },
    show:function(){
      game.state.start("level9")  
    },
    update:function(){
        
    }
}