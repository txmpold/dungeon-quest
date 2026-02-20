//---- GLOBAL VARIABLES ----//
let game: Game;
let music: {
  mystery: p5.SoundFile;
};
let images: {
  // tile: p5.Image;
  map: p5.Image;
  character: p5.Image;
  slime: p5.Image;
  boss: p5.Image;
  weapon: p5.Image;
  tiles: {
    floor: p5.Image;
    water: p5.Image;
    wall: p5.Image;
  };
};

let tiles: p5.Image[];
let levels: string[][];

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  music = {
    mystery: loadSound('assets/music/mystery.mp3'),
  };
  images = {
    // tile: loadImage("assets/images/tile.png"),
    map: loadImage('assets/images/josefineLevelimg.png'),
    character: loadImage('assets/images/character.png'),
    slime: loadImage('assets/images/slims.png'),
    boss: loadImage('assets/images/boss.png'),
    weapon: loadImage('assets/images/fireball.png'),
    tiles: {
      floor: loadImage('assets/tiles/floor.png'),
      wall: loadImage('assets/tiles/wall.png'),
      water: loadImage('assets/tiles/water.png'),
    },
  };

  levels = [
    [],
    loadStrings('assets/levels/alex-lvl-one.txt'), // Level 1
    loadStrings('assets/levels/alex-lvl-one.txt'), // Level 2
    loadStrings('assets/levels/alex-lvl-one.txt'), // Level 3
  ];
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function belows
 */
function setup() {
  createCanvas(GamePanel.screenWidth, GamePanel.screenHeight);
  frameRate(60);
  music.mystery.setVolume(0.8);

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
