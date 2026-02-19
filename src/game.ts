class Game {
  protected levelFactory: LevelFactory;
  private level: Level;

  /* protected pauseMenu: pauseMenu;
  protected gameOverMenu: gameOverMenu; */

  constructor() {
    /* this.pauseMenu = pauseMenu;
    this.gameOverMenu = gameOverMenu; */

    this.levelFactory = new LevelFactory();
    this.level = new Level();
    // this.level = this.levelFactory.generateLevel(1);
  }

  public update() {
    this.level.update();
  }
  public draw() {
    this.level.draw();
  }
}
