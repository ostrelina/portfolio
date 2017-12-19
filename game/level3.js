var level3={
    preload:function(){
        
    },
    ogo:[
        "Меня зовут Алекс, сегодня мы с друзьями",
        " пошли в поход",
        "день был прекрасным мы готовили шашлыки,",
        "рыбачили,игради в футбол,вообщем класс",
        "Потом вскоре встемнело и мы пошли по домам",
        
        
        "'О нет пошёл сильный ливень'",
        " рядом был дом зайду туда надеюсь меня радушно ",
        "впустят"
    ],
    line:[],
    worldindex:0,
    lineindex:0,
    worldDelay:100,
    lineDelay:700,
    text:null,
    count:0,
    create:function(){
         game.physics.startSystem(Phaser.Physics.ARCADE);
            this.text = game.add.text(32, 32, '', { font: "40px Arial", fill: "#19de65" });
            this.nextline();
    },
     nextline:function(){
    if(level3.lineindex==level3.ogo.length){
        return;
    }
        level3.line=level3.ogo[level3.lineindex].split('');
        level3.worldindex=0;
        game.time.events.repeat(level3.worldDelay, level3.line.length, level3.nextWorld,this);
        level3.lineindex++;
},
    nextWorld:function(){
        level3.text.text = level3.text.text.concat(level3.line[level3.worldindex] + " "); 
        level3.worldindex++;
        
        if (level3.worldindex === level3.line.length)
    {
        level3.text.text = level3.text.text.concat("\n");

        game.time.events.add(level3.lineDelay, level3.nextline,this);
        
    }
        level3.count++;
        console.log(level3.count)
    },
    update:function(){
        if(level3.count== 255){
        game.state.start('level4')
           
           }
}
}