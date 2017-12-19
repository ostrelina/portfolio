var level2 = {
    preload: function () {

    },
    concet: [
        "Здравствуй игрок. Приглашаю тебя в эту странную",
        "полон загадок игру.",

        "тут ты разгадаешь сложные головоломки,загадки,",
        "искать ключи и тайну 100летней давности.",

        "Желаю удачи, я старался сделать игру более",
        "интересным для тебя. ПОЕХАЛИ"
    ],
    line: [],
    worldindex: 0,
    lineindex: 0,
    worldDelay: 50,
    lineDelay: 700,
    text: null,
    count:0,
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);


        this.text = game.add.text(32, 32, '', {
            font: "40px Arial",
            fill: "#19de65"
        });
        this.nextline();
    },

    nextline: function () {
        if (level2.lineindex == level2.concet.length) {
            return;
           // game.state.start('level3');
        }
        level2.line = level2.concet[level2.lineindex].split('');
        level2.worldindex = 0;
        game.time.events.repeat(level2.worldDelay, level2.line.length, level2.nextWorld, this);
        level2.lineindex++;
    },
    nextWorld: function () {
        level2.text.text = level2.text.text.concat(level2.line[level2.worldindex] + " ");
        level2.worldindex++;

        if (level2.worldindex === level2.line.length) {
            level2.text.text = level2.text.text.concat("\n");

            game.time.events.add(level2.lineDelay, level2.nextline, this);

        }
         level2.count++;
        //console.log( level2.count)
    },

    update: function () {
        if(level2.count==222){
            game.state.start('level3')
        }
//        if (level2.worldindex>=28) {
//            game.state.start('level3');
//
//        }

    }
}
