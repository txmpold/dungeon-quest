class StartMenu {
  public game: Game;
  public levelFactory: LevelFactory;
  public level: Level;
  private startButton: Button;
  private showControls: Button;
  private controlsOnScreen: boolean = false;

  constructor(game: Game) {
    this.game = game;
    this.startButton = new Button(
      "Start Game",
      () => this.game.startGame(),
      false,
      createVector(200, 60),
      createVector(
        GamePanel.worldWidth / 2 - 100,
        GamePanel.worldHeight / 2 - 30,
      ),
    );
    this.showControls = new Button(
      "Controls",
      () => (this.controlsOnScreen = true),
      false,
      createVector(200, 60),
      createVector(
        GamePanel.worldWidth / 2 - 100,
        GamePanel.worldHeight / 2 + 40,
      ),
    );
    this.controlsOnScreen = this.controlsOnScreen;
    this.levelFactory = new LevelFactory(tiles, 0, 0);
    this.level = this.levelFactory.generateLevel(0);
  }

  public update() {
    this.startButton.update();
    this.showControls.update();
  }

  public draw() {
    image(
      images.menuImages.background,
      0,
      0,
      GamePanel.screenWidth,
      GamePanel.screenHeight,
    );
    image(images.menuImages.logo, GamePanel.worldWidth / 2 - 150, 60, 300, 145);
    if (this.controlsOnScreen === true) {
      this.drawControls();
    } else {
      this.startButton.draw();
      this.showControls.draw();
    }
  }

  public drawControls() {
    image(
      images.menuImages.controls,
      GamePanel.worldWidth / 2 - GamePanel.worldWidth / 2 + 125,
      GamePanel.worldHeight / 2 - GamePanel.worldHeight / 2 + 100,
      GamePanel.worldWidth - 250,
      GamePanel.worldHeight - 200,
    );
    if (keyIsDown(ESCAPE)) {
      this.controlsOnScreen = false;
    }
  }
}
