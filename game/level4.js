var level4={
    preload:function(){
        game.load.image("hd","hd.jpg")
        game.load.image("box","box.png")
        game.load.image("left","left.png")
        game.load.image("up","up1.png")
    },
    hd:null,
    left:null,
    up:null,
    create:function(){
        game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL
        this.hd=game.add.image(0, -150, 'hd');
        game.add.image(1450,450,'left')
        game.add.image(100,600,'box')
        game.add.text(100,600,"Я долго стучался но никто не открывал дверь через минут \n 5 открылась дверь но никого дома не было, \n вдруг дверь сама закрылась и не открывлась, тут резко раздался мужской голос и говорит \n 'Ты зашел в наш дом и должен нам помочь,и успокоить наши души,во-первых ты должен\n пройти все загадки и головоломки,во-вторых разгадать загадку кто нас убил и зачем. '\n О ГОСПОДИ КТО ЭТО ГОВОРИТ &#@$%$!@% \n через 2 часа я успокоился и понял что это серъезно,и начал ходить по дому искать \n хоть что-то",{
            fill: "#ffffff",
        });
        this.hd.scale.setTo(3.5)
         this.left = game.add.button(1450,450, 'left', this.actionOnClick)
        this.up=game.add.button(800,0,'up',this.actionOnClick3)
        
        
    },
    actionOnClick:function(){
        game.state.start('level5');
    },
    actionOnClick3:function(){
        game.state.start('level8')
    },
    update:function(){
    
}
}