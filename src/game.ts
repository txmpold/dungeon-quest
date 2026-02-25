class Game {
  public levelFactory: LevelFactory;
  public level: Level;
  private startMenu: StartMenu;
  public gameIsStarted: boolean = false;

  constructor(levelFactory: LevelFactory, level: Level) {
    this.startMenu = new StartMenu(this);
    this.levelFactory = levelFactory;
    this.level = level;
  }

  public update() {
    if (this.gameIsStarted === true) {
      this.startGame();
    } else {
      this.startMenu.update();
    }
  }
  
  public draw() {
    if (this.gameIsStarted === false) {
      this.startMenu.draw();
    }
  }

  public startGame() {
    this.levelFactory = new LevelFactory(tiles, 0, 0);
    this.level = this.levelFactory.generateLevel(0);
    this.level.update()
    this.level.draw();
  }
  
}
