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
};

let tiles: p5.Image[];
let levelOne: string[];
let levelOneGrid: number[][];

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  music = {
    mystery: loadSound("assets/music/mystery.mp3"),
  };
  images = {
    // tile: loadImage("assets/images/tile.png"),
    map: loadImage("assets/images/josefineLevelimg.png"),
    character: loadImage("assets/images/character.png"),
    slime: loadImage("assets/images/slims.png"),
  };

  tiles = [
    loadImage("assets/tiles/darktile.png"),
    loadImage("assets/tiles/floor.png"),
    loadImage("assets/tiles/wall.png"),
    loadImage("assets/tiles/water.png"),
  ];

  levelOne = loadStrings("assets/levels/alex-lvl-one.txt");
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

  levelOneGrid = loadMap(levelOne);

  game = new Game();
}

function loadMap(newMap: string[]): number[][] {
  return newMap.map((line) =>
    line
      .trim()
      .split(/\s+/)
      .map((value) => Number(value)),
  );
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
  resizeCanvas(windowWidth, windowHeight);
}
(window as any).preload = preload;
(window as any).setup = setup;
(window as any).draw = draw;
(window as any).windowResized = windowResized;
