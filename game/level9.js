var level9={
    preload:function(){
        
    },
    text:null,
    text2:null,
    text3:null,
    create:function(){
         game.physics.startSystem(Phaser.Physics.ARCADE);
          game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL
       game.add.text(32, 32, "сколько лет сюда не вступала нога живого человека?", {
            font: "40px Arial",
            fill: "#ffffff",
        }); 
      this.text=game.add.text(100,100,'100',{
          font:'40px Arial',
          fill:"#ffffff",
      });
       this.text2=game.add.text(200,100,'300',{
           font:'40px Arial',
          fill:"#ffffff",
       });
        this.text3=game.add.text(300,100,'1000',{
            font:'40px Arial',
          fill:"#ffffff",
        });
        this.text.inputEnabled=true;
        this.text.events.onInputDown.add(this.func1)
    },
    func1:function(){
        game.state.start("level10")
    },
    update:function(){
        
    }
}