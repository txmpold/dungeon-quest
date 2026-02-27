class Game {
  public levelFactory: LevelFactory;
  public level: Level;
  private scene: Scene;
  public gameIsStarted: boolean = false;

  constructor() {
    this.levelFactory = new LevelFactory(tiles, 0, 0);
    this.level = new Level([]);
    this.scene = new Scene(this, "startMenu");
  }

  public startGame() {
    this.gameIsStarted = true;
    this.level = this.levelFactory.generateLevel(0);
  }

  public draw() {
    cursor("assets/images/swordcursor.png");
    background(0);
    if (this.gameIsStarted === true) {
      noCursor();
      this.level.draw();
    } else {
      this.scene.draw();
    }
  }

  public update() {
    if (this.gameIsStarted === true) {
      this.level.update();
    } else {
      this.scene.update();
    }
  }
}
