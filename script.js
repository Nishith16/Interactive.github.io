let config = {
    type: Phaser.auto,

    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 4000,
        height: 1000,
    },

    backgroundColor: 0xffff11,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 500,
            },

        }
    },

    scene: {
        preload: preload,
        create: create,
        update: update,

    }
};


let game = new Phaser.Game(config);

let player_config = {
    player_speed: 150,
    player_jumpspeed: -300,
}


function preload() {
    this.load.image("ground", "Assets/topground.png");
    this.load.image("grass", "Assets/grass.png");
    this.load.image("sky", "Assets/background.png");
    this.load.image("cloud", "Assets/cloud.png");
    this.load.image("stand", "Assets/stand.png");
    this.load.image("castle", "Assets/castle.gif");
    this.load.image("pipe2", "Assets/pipe2.gif");
    this.load.image("resume", "Assets/resume.png");
    this.load.image("house", "Assets/house.png");
    this.load.image("hometown", "Assets/hometown.png");
    this.load.image("tree", "Assets/tree.png");
    this.load.image("N", "Assets/N.jpg");
    this.load.image("I", "Assets/I.jpg");
    this.load.image("S", "Assets/S.jpg");
    this.load.image("HLetter", "Assets/H.jpg");
    this.load.image("T", "Assets/T.jpg");
    this.load.image("D", "Assets/D.jpg");
    this.load.image("U", "Assets/u.jpg");
    this.load.image("B", "Assets/B.jpg");
    this.load.image("E", "Assets/E.jpg");
    this.load.image("arrow1", "Assets/arrow1.png");
    this.load.image("ctree", "Assets/ctree.png");
    this.load.image("ray", "Assets/ray.png");
    this.load.image("note1", "Assets/note1.png");
    this.load.image("note2", "Assets/note2.png");
    this.load.image("clg", "Assets/clg.png");
    this.load.image("mountain", "Assets/mountain.png");
    this.load.image("skills", "Assets/skills.png");
    this.load.image("fruit", "Assets/apple.png");
    this.load.image("projectTitle", "Assets/projecttitle.png");
    this.load.image("project1", "Assets/project1.png");
    this.load.image("project2", "Assets/project2.png");
    this.load.image("training", "Assets/training.png");
    this.load.image("training1", "Assets/training1.png");
    this.load.image("download", "Assets/download.png");
    this.load.image("t2", "Assets/t2.png");
    this.load.image("t3", "Assets/t3.png");
    this.load.image("tech", "Assets/tech.png");
    this.load.image("java", "Assets/java.png");
    this.load.image("HTML", "Assets/HTML.png");
    this.load.image("CSS", "Assets/CSS.png");
    this.load.image("jq", "Assets/jq.png");
    this.load.image("c", "Assets/c.png");
    this.load.image("js", "Assets/js.png");
    this.load.image("interest", "Assets/interest.png");
    this.load.image("travel", "Assets/travel.png");
    this.load.image("profiles", "Assets/profiles.png");
    this.load.image("linkedin", "Assets/linkedin.png");
    this.load.image("github", "Assets/github.png");
    this.load.image("gmail", "Assets/gmail.png");
    this.load.image("hackerrank", "Assets/hackerrank.png");
    this.load.image("Left", "Assets/left.png");
    this.load.image("Right", "Assets/right.png");
    this.load.image("django", "Assets/django.png");
    this.load.spritesheet("flag", "Assets/flag.png", {
        frameWidth: 33,
        frameHeight: 168
    });
    this.load.spritesheet("dude", "Assets/dude.png", {
        frameWidth: 32,
        frameHeight: 48
    });


}

function create() {
    var flagVar = 0;

    W = game.config.width;
    H = game.config.height;

    this.about = this.add.text(450, H - 170, 'Ratlam', {
        fontSize: '20px',
        fill: '#000',
        fontFamily: 'serif'
    });


    //add tilesprites
    let ground = this.add.tileSprite(0, H - 60, W, 60, 'ground');
    ground.setOrigin(0, 0);

    let hometown = this.add.sprite(325, H - 240, 'hometown').setScale(0.2, 0.2);
    hometown.setOrigin(0, 0);

    this.house = this.add.sprite(500, H - 60, 'house').setScale(0.2, 0.2);
    this.house.setOrigin(1, 1);

    let pipe2 = this.add.sprite(550, H - 60, 'pipe2');
    pipe2.setOrigin(1, 1);


    let grass = this.add.group({
        key: "grass",
        repeat: 4,

        setXY: { x: 1350, y: H - 68, stepX: 100 },

    });
    let cloud = this.add.group({
        key: "cloud",
        repeat: 4,

        setXY: { x: 750, y: H - 210, stepX: 100 },

    });
    let cloud1 = this.add.group({
        key: "cloud",
        repeat: 7,

        setXY: { x: 2500, y: H - 210, stepX: 150 },

    });
    this.about = this.add.text(570, H - 230, 'Schooling From', {
        fontSize: '16px',
        fill: '#000',
        fontFamily: 'serif'
    });
    this.about = this.add.text(580, H - 210, 'Kendriya Vidyalaya', {
        fontSize: '18px',
        fill: '#000',
        fontFamily: 'serif'
    });


    let tree = this.add.sprite(1000, H - 60, 'tree').setScale(0.15, 0.15);
    tree.setOrigin(1, 1);
    let arrow1 = this.add.sprite(965, H - 100, 'arrow1').setScale(0.15, 0.15);
    arrow1.setOrigin(1, 1);

    let castle = this.add.sprite(700, H - 60, 'castle').setScale(0.7, 0.7);
    castle.setOrigin(1, 1);

    let ujjain = this.add.sprite(3500, H - 650, 'ujjain').setScale(0.5, 0.5);
    ujjain.setOrigin(0, 0);

    let sky = this.add.sprite(0, 0, 'sky');
    sky.setOrigin(0, 0);
    sky.displayHeight = H;
    sky.displayWidth = W;
    sky.depth = -1;

    //create rays on the top of the background
    let rays = [];

    for (let i = -10; i <= 10; i++) {
        let ray = this.add.sprite(3 / 4 * W, H - 50, 'ray');
        ray.displayHeight = 1.2 * H;

        ray.setOrigin(0.5, 1);
        ray.alpha = 0.2;
        ray.angle = i * 20;
        ray.depth = -1;
        rays.push(ray);
    }
    for (let i = -10; i <= 10; i++) {
        let ray = this.add.sprite(W / 4, H - 50, 'ray');
        ray.displayHeight = 1.2 * H;

        ray.setOrigin(0.5, 1);
        ray.alpha = 0.2;
        ray.angle = i * 20;
        ray.depth = -1;
        rays.push(ray);
    }
    let flag = this.add.sprite(W, H - 60, 'flag', 4);
    flag.setOrigin(1, 1);





    let N = this.add.sprite(60, H - 165, 'N').setScale(0.03, 0.03);
    let I = this.add.sprite(83, H - 165, 'I').setScale(0.03, 0.03);
    let S = this.add.sprite(106, H - 165, 'S').setScale(0.03, 0.03);
    let HLetter = this.add.sprite(129, H - 165, 'HLetter').setScale(0.03, 0.03);
    I = this.add.sprite(152, H - 165, 'I').setScale(0.03, 0.03);
    let T = this.add.sprite(175, H - 165, 'T').setScale(0.03, 0.03);
    HLetter = this.add.sprite(198, H - 165, 'HLetter').setScale(0.03, 0.03);
    let D = this.add.sprite(106, H - 140, 'D').setScale(0.03, 0.03);
    let U = this.add.sprite(129, H - 140, 'U').setScale(0.03, 0.03);
    let B = this.add.sprite(152, H - 140, 'B').setScale(0.03, 0.03);
    let E = this.add.sprite(175, H - 140, 'E').setScale(0.03, 0.03);
    let pc = this.add.sprite(630, H - 800, 'pc').setScale(0.1, 0.1);
    let stand = this.add.sprite(125, H - 240, 'stand').setScale(0.1, 0.1);
    stand.setOrigin(0, 0);
    let resume = this.add.sprite(50, H - 220, 'resume').setScale(0.3, 0.3);
    resume.setOrigin(0, 0);

    let clg = this.add.sprite(1200, H - 55, 'clg').setScale(0.25, 0.25);
    clg.setOrigin(1, 1);
    let fruit = this.add.sprite(1350, H - 60, 'fruit').setScale(0.2, 0.2);
    fruit.setOrigin(1, 1);
    let fruit1 = this.add.sprite(710, H - 60, 'fruit').setScale(0.2, 0.2);
    fruit1.setOrigin(1, 1);
    let fruit2 = this.add.sprite(W - 15, H - 60, 'fruit').setScale(0.2, 0.2);
    fruit2.setOrigin(1, 1);
    let skills = this.add.sprite(1200, H - 240, 'skills').setScale(0.2, 0.2);
    skills.setOrigin(0, 0);
    let projectTitle = this.add.sprite(1890, H - 260, 'projectTitle').setScale(0.2, 0.2);
    projectTitle.setOrigin(0, 0);
    let project1 = this.add.sprite(2150, H - 80, 'project1').setScale(0.2, 0.2);
    project1.setOrigin(1, 1);
    let project2 = this.add.sprite(2350, H - 80, 'project2').setScale(0.2, 0.2);
    project2.setOrigin(1, 1);
    let training = this.add.sprite(2480, H - 160, 'training').setScale(0.2, 0.2);
    training.setOrigin(1, 1);
    let training1 = this.add.sprite(2580, H - 80, 'training1').setScale(0.2, 0.2);
    training1.setOrigin(1, 1);
    let download = this.add.sprite(2680, H - 58, 'download').setScale(0.4, 0.4);
    download.setOrigin(1, 1);
    let t2 = this.add.sprite(2830, H - 58, 't2').setScale(0.4, 0.4);
    t2.setOrigin(1, 1);
    let t3 = this.add.sprite(2980, H - 58, 't3').setScale(0.4, 0.4);
    t3.setOrigin(1, 1);
    let tech = this.add.sprite(3130, H - 70, 'tech').setScale(0.5, 0.5);
    tech.setOrigin(1, 1);
    let interest = this.add.sprite(3420, H - 85, 'interest').setScale(0.2, 0.2);
    interest.setOrigin(1, 1);
    let travel = this.add.sprite(3450, H - 60, 'travel').setScale(0.08, 0.08);
    travel.setOrigin(1, 1);
    let tree2 = this.add.sprite(3580, H - 60, 'tree').setScale(0.15, 0.15);
    tree2.setOrigin(1, 1);
    let mountain = this.add.sprite(3700, H - 50, 'mountain').setScale(0.2, 0.2);
    mountain.setOrigin(1, 1);
    mountain.depth = -1;

    this.about = this.add.text(3300, H - 180, '*Travelling*', {
        fontSize: '24px',
        fill: '#000',
        fontFamily: 'serif'
    });

    let profiles = this.add.sprite(3600, H - 160, 'profiles').setScale(0.15, 0.15);
    profiles.setOrigin(1, 1);
    let linkedin = this.add.sprite(3750, H - 200, 'linkedin').setScale(0.015, 0.015).setInteractive();
    linkedin.setOrigin(1, 1);
    linkedin.on('pointerup', openLinkedIn, this);
    let github = this.add.sprite(3753, H - 160, 'github').setScale(0.08, 0.08).setInteractive();
    github.setOrigin(1, 1);
    github.on('pointerup', openGithub, this);
    let gmail = this.add.sprite(3747, H - 130, 'gmail').setScale(0.08, 0.08).setInteractive();
    gmail.setOrigin(1, 1);
    gmail.on('pointerup', openGmail, this);
    let hackerrank = this.add.sprite(3750, H - 90, 'hackerrank').setScale(0.15, 0.15).setInteractive();
    hackerrank.on('pointerup', openHackerrank, this);
    hackerrank.setOrigin(1, 1);

    this.player = this.physics.add.sprite(10, 100, 'dude', 4);

    this.physics.add.existing(ground, true);
    this.physics.add.existing(N, true);
    this.physics.add.existing(I, true);
    this.physics.add.existing(S, true);
    this.physics.add.existing(HLetter, true);
    this.physics.add.existing(T, true);
    this.physics.add.existing(fruit, true);
    this.physics.add.existing(fruit1, true);
    this.physics.add.existing(fruit2, true);
    this.physics.add.existing(flag, true);
    this.physics.add.existing(pipe2, true);

    this.physics.add.collider(this.player, ground);
    this.physics.add.collider(this.player, N);
    this.physics.add.collider(this.player, I);
    this.physics.add.collider(this.player, S);
    this.physics.add.collider(this.player, HLetter);
    this.physics.add.collider(this.player, T);
    this.physics.add.collider(this.player, pipe2);

    this.physics.add.overlap(this.player, fruit, eatFruits, null, this);
    this.physics.add.overlap(this.player, fruit1, showScore, null, this);
    this.physics.add.overlap(this.player, fruit2, showTy, null, this);

    this.player.setBounce(0.4);
    this.player.setCollideWorldBounds(true);

    //create cameras
    this.cameras.main.setBounds(0, 0, W, H);
    this.physics.world.setBounds(0, 0, W, H);

    this.cameras.main.startFollow(this.player, true, true);
    this.cameras.main.setZoom(3);



    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', {
            start: 0,
            end: 3
        }),
        frameRate: 10,
        repeat: -1,
    });
    this.anims.create({
        key: 'center',
        frames: this.anims.generateFrameNumbers('dude', {
            start: 4,
            end: 4
        }),
        frameRate: 10,
        repeat: -1,
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', {
            start: 5,
            end: 8
        }),
        frameRate: 10,
        repeat: -1,
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    function showTy(player, fruit2) {

        this.about = this.add.text(W - 200, H - 180, '**Thank You', {
            fontSize: '24px',
            fill: '#FC2727',
            fontFamily: 'serif'
        });
        this.about = this.add.text(W - 190, H - 160, 'For Watching**', {
            fontSize: '24px',
            fill: '#FC2727',
            fontFamily: 'serif'
        });
        fruit2.destroy();
    }

    function eatFruits(player, fruit) {
        ctree = this.add.group({
            key: "ctree",
            repeat: 6,
            setScale: {
                x: 0.07,
                y: 0.07
            },
            setXY: { x: 1300, y: H - 113, stepX: 100 },


        });

        let java = this.add.sprite(1320, H - 180, 'java').setScale(0.2, 0.2);
        java.setOrigin(1, 1);
        let HTML = this.add.sprite(1420, H - 180, 'HTML').setScale(0.2, 0.2);
        HTML.setOrigin(1, 1);
        let CSS = this.add.sprite(1530, H - 180, 'CSS').setScale(0.2, 0.2);
        CSS.setOrigin(1, 1);
        let jq = this.add.sprite(1620, H - 180, 'jq').setScale(0.2, 0.2);
        jq.setOrigin(1, 1);
        let c = this.add.sprite(1720, H - 180, 'c').setScale(0.2, 0.2);
        c.setOrigin(1, 1);
        let js = this.add.sprite(1830, H - 180, 'js').setScale(0.2, 0.2);
        js.setOrigin(1, 1);
        let django = this.add.sprite(1930, H - 180, 'django').setScale(0.05, 0.05);
        django.setOrigin(1, 1);


        fruit.destroy();
    }

    function showScore(player, fruit1) {

        let note1 = this.add.sprite(800, H - 80, 'note1').setScale(0.08, 0.08);
        note1.setOrigin(1, 1);
        note1.depth = -1;
        let note2 = this.add.sprite(890, H - 80, 'note2').setScale(0.08, 0.08);
        note2.setOrigin(1, 1);
        note2.depth = -1;
        fruit1.destroy();
    }

}

function update() {
    if (this.cursors.left.isDown) {
        this.player.setVelocityX(-player_config.player_speed);
        this.player.anims.play('left', true);

    } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(player_config.player_speed);
        this.player.anims.play('right', true);

    } else {
        this.player.setVelocityX(0);
        this.player.anims.play('center', true);
    }

    //add jumping ability , stop the player when in air
    if (this.cursors.up.isDown && this.player.body.touching.down) {
        this.player.setVelocityY(player_config.player_jumpspeed);
    }
}

function openLinkedIn() {
    //    var tweet = 'I am testing a button from within a Phaser example';

    var url = 'https://linkedin.com/in/nishith-dube-a344b61a6';

    var s = window.open(url, '_blank');

    if (s && s.focus) {
        s.focus();
    } else if (!s) {
        window.location.href = url;
    }
}

function openGmail() {
    //    var tweet = 'I am testing a button from within a Phaser example';

    var url = 'https://nishithdube16@gmail.com';

    var s = window.open(url, '_blank');

    if (s && s.focus) {
        s.focus();
    } else if (!s) {
        window.location.href = url;
    }
}

function openGithub() {
    //    var tweet = 'I am testing a button from within a Phaser example';

    var url = 'https://github.com/Nishith16';

    var s = window.open(url, '_blank');

    if (s && s.focus) {
        s.focus();
    } else if (!s) {
        window.location.href = url;
    }
}

function openHackerrank() {
    var url = 'https://www.hackerrank.com/nishithdube16';

    var s = window.open(url, '_blank');

    if (s && s.focus) {
        s.focus();
    } else if (!s) {
        window.location.href = url;
    }
}