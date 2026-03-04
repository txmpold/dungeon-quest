//---- GLOBAL VARIABLES ----//
let game: Game;
let button: Button;
let music: {
  menuMusic: p5.SoundFile;
  gameMusic: p5.SoundFile;
  gameOverMusic: p5.SoundFile;
};
let soundEffects: {
  shoot: p5.SoundFile;
  menuButtonSound: p5.SoundFile;
  explosion: p5.SoundFile;
  fireball: p5.SoundFile;
  treasureIsUnlocked: p5.SoundFile;
  treasureOpening: p5.SoundFile;
  heal: p5.SoundFile;
  boots: p5.SoundFile;
  swordAttack: p5.SoundFile;
  takingdmg: p5.SoundFile;
};
let fonts: {
  font: p5.Font;
};
let images: {
  // tile: p5.Image;
  map: p5.Image;
  character: p5.Image;
  slime: p5.Image;
  boss: p5.Image;
  heart: p5.Image;
  weapons: {
    fireball_right: p5.Image;
    fireball_left: p5.Image;
    fireball_up: p5.Image;
    fireball_down: p5.Image;
  };
  treasureChoices: {
    heal: p5.Image;
    fireball: p5.Image;
    boots: p5.Image;
  };
  tiles: {
    floor: p5.Image;
    water: p5.Image;
    wall: p5.Image;
    wallTop: p5.Image;
    wallDown: p5.Image;
    wallLeft: p5.Image;
    wallRight: p5.Image;
    wallTopLeftCorner: p5.Image;
    wallTopRightCorner: p5.Image;
    wallDownLeftCorner: p5.Image;
    wallDownRightCorner: p5.Image;
    ghost: p5.Image;
    barrel: p5.Image;
    treasure: p5.Image;
    candelabra: p5.Image;
    box1: p5.Image;
    box2: p5.Image;
    box3: p5.Image;
    wallShadow: p5.Image;
    floorStone: p5.Image;
    wallBottom: p5.Image;
    wallCornerSpec: p5.Image;
    wallCornerSpec2: p5.Image;
    wallCornerSpec3: p5.Image;
    wallCornerSpec4: p5.Image;
    wallCornerSpec5: p5.Image;
    floorCircle: p5.Image;
    animatedProps: p5.Image;
    moreProps: p5.Image;
  };
  menuImages: {
    background: p5.Image;
    button: p5.Image;
    logo: p5.Image;
    swordcursor: p5.Image;
    controlsbg: p5.Image;
    arrowkeys: p5.Image;
    spacebar: p5.Image;
    gameOver: p5.Image;
  };
};

/* let isCollision: p5.Image[]; kanske behöver */
let tiles: p5.Image[];
let levels: string[][];

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  music = {
    menuMusic: loadSound("assets/music/menu-music.wav"),
    gameMusic: loadSound("assets/music/game-music.wav"),
    gameOverMusic: loadSound("assets/music/game-over-music.mp3"),
  };
  soundEffects = {
    shoot: loadSound("assets/soundEffects/laserShoot.mp3"),
    menuButtonSound: loadSound("assets/soundEffects/menu-button-sound.mp3"),
    explosion: loadSound("assets/soundEffects/explosion.mp3"),
    fireball: loadSound("assets/soundEffects/fireball.mp3"),
    treasureIsUnlocked: loadSound(
      "assets/soundEffects/treasure-is-unlocked.mp3",
    ),
    treasureOpening: loadSound("assets/soundEffects/treasure-open.wav"),
    heal: loadSound("assets/soundEffects/heal.wav"),
    boots: loadSound("assets/soundEffects/boots.wav"),
    swordAttack: loadSound("assets/soundEffects/sword-attack.wav"),
    takingdmg: loadSound("assets/soundEffects/takingdmg.wav"),
  };
  fonts = {
    font: loadFont("assets/fonts/PixelifySans-VariableFont_wght.ttf"),
  };
  images = {
    // tile: loadImage("assets/images/tile.png"),
    map: loadImage("assets/images/josefineLevelimg.png"),
    character: loadImage("assets/images/character.png"),
    slime: loadImage("assets/images/slims.png"),
    boss: loadImage("assets/images/boss_.png"),
    heart: loadImage("assets/images/heart.png"),
    weapons: {
      fireball_right: loadImage("assets/images/fireball_right.png"),
      fireball_left: loadImage("assets/images/fireball_left.png"),
      fireball_up: loadImage("assets/images/fireball_up.png"),
      fireball_down: loadImage("assets/images/fireball_down.png"),
    },
    treasureChoices: {
      heal: loadImage("assets/treasure-choices/heal.png"),
      fireball: loadImage("assets/treasure-choices/fireball.png"),
      boots: loadImage("assets/treasure-choices/fast.png"),
    },
    tiles: {
      floor: loadImage("assets/tiles/floor.png"),
      wall: loadImage("assets/tiles/wall.png"),
      water: loadImage("assets/tiles/water.png"),
      wallTop: loadImage("assets/tiles/wall-top.png"),
      wallDown: loadImage("assets/tiles/wall-down.png"),
      wallLeft: loadImage("assets/tiles/wall-left.png"),
      wallRight: loadImage("assets/tiles/wall-right.png"),
      wallTopLeftCorner: loadImage("assets/tiles/wall-top-left-corner.png"),
      wallTopRightCorner: loadImage("assets/tiles/wall-top-right-corner.png"),
      wallDownLeftCorner: loadImage("assets/tiles/wall-down-left-corner.png"),
      wallDownRightCorner: loadImage("assets/tiles/wall-down-right-corner.png"),
      ghost: loadImage("assets/tiles/ghost.png"),
      barrel: loadImage("assets/tiles/barrel.png"),
      treasure: loadImage("assets/tiles/treasure.png"),
      candelabra: loadImage("assets/tiles/candelabra.png"),
      box1: loadImage("assets/tiles/box1.png"),
      box2: loadImage("assets/tiles/box2.png"),
      box3: loadImage("assets/tiles/box3.png"),
      wallShadow: loadImage("assets/tiles/wall-shadow.png"),
      floorStone: loadImage("assets/tiles/floor-stone.png"),
      wallBottom: loadImage("assets/tiles/wall-bottom.png"),
      wallCornerSpec: loadImage("assets/tiles/wall-corner-spec.png"),
      wallCornerSpec2: loadImage("assets/tiles/wall-corner-spec2.png"),
      wallCornerSpec3: loadImage("assets/tiles/wall-corner-spec3.png"),
      wallCornerSpec4: loadImage("assets/tiles/wall-corner-spec4.png"),
      wallCornerSpec5: loadImage("assets/tiles/wall-corner-spec5.png"),
      floorCircle: loadImage("assets/tiles/floor-circle.png"),
      animatedProps: loadImage("assets/tiles/animatedProps.png"),
      moreProps: loadImage("assets/tiles/more-props.png"),
    },
    menuImages: {
      background: loadImage("assets/images/menubackground.png"),
      button: loadImage("assets/images/button.png"),
      logo: loadImage("assets/images/logo.png"),
      swordcursor: loadImage("assets/images/swordcursor.png"),
      controlsbg: loadImage("assets/images/controls_bg.png"),
      arrowkeys: loadImage("assets/images/arrowkeys.png"),
      spacebar: loadImage("assets/images/spacebar.png"),
      gameOver: loadImage("assets/images/gameover.png"),
    },
  };

  levels = [
    [],
    loadStrings("assets/levels/level1.txt"), // Level 1
    loadStrings("assets/levels/level2.txt"), // Level 2
    loadStrings("assets/levels/level3.txt"), // Level 3
  ];

  /* isCollision = [loadImage("assets/tiles/water.png")]; kanske behöver */
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function belows
 */
let musicOff = false;

function setup() {
  createCanvas(GamePanel.screenWidth, GamePanel.screenHeight);
  frameRate(60);
  music.menuMusic.setVolume(1);
  music.gameOverMusic.setVolume(0.1);
  soundEffects.shoot.setVolume(0.4);
  soundEffects.menuButtonSound.setVolume(0.3);
  soundEffects.treasureIsUnlocked.setVolume(0.4);
  soundEffects.takingdmg.setVolume(0.1);

  game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */

function draw() {
  game.update();
  game.draw();
}

/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(GamePanel.screenWidth, GamePanel.screenHeight);
}
(window as any).preload = preload;
(window as any).setup = setup;
(window as any).draw = draw;
(window as any).windowResized = windowResized;
