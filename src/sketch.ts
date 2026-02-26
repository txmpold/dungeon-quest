//---- GLOBAL VARIABLES ----//
let game: Game;
let music: {
  mystery: p5.SoundFile;
};
let soundEffects: {
  shoot: p5.SoundFile;
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
    mystery: loadSound("assets/music/mystery.mp3"),
  };
  soundEffects = {
    shoot: loadSound("assets/soundEffects/laserShoot.mp3"),
  };
  images = {
    // tile: loadImage("assets/images/tile.png"),
    map: loadImage("assets/images/josefineLevelimg.png"),
    character: loadImage("assets/images/character.png"),
    slime: loadImage("assets/images/slims.png"),
    boss: loadImage("assets/images/boss_.png"),
    weapon: loadImage("assets/images/fireball.png"),
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
    },
  };

  levels = [
    loadStrings("assets/levels/level2.txt"), // Level 2
    loadStrings("assets/levels/level1.txt"), // Level 1
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
  soundEffects.shoot.setVolume(0.4);

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
