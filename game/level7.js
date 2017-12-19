var level7={
    preload:function(){
      game.load.image("right","right.png")  
},
pop:null,
    create:function(){
         game.physics.startSystem(Phaser.Physics.ARCADE);
          game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL
        this.pop = game.add.text(32, 32, "Там было написано.'\n если отгадаешь то найдешь ключь,тебе надо найти старинные часы там \n ты найдешь следующий вопрос' Так становится всё итереснее и интереснее", {
            font: "40px Arial",
            fill: "#ffffff",
        });
         this.right = game.add.button(0,450, 'right', this.actionOnClick2)
        
    },
    actionOnClick2:function(){
        game.state.start("level6");
    },
    update:function(){
            
    }
}