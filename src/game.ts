class Game {
  public levelFactory: LevelFactory;
  public level: Level;
  private startMenu: StartMenu;
  public gameIsStarted: boolean = false;

  constructor() {
    this.levelFactory = new LevelFactory(tiles, 0, 0);
    this.level = new Level([])
    this.startMenu = new StartMenu(this);
  }
  
  public startGame() {
    this.gameIsStarted = true;
    this.level = this.levelFactory.generateLevel(0);
  }
  
  
  public draw() {
    if (this.gameIsStarted === true) {
      this.level.draw()
    } else {
      this.startMenu.draw();
    }
  }

  public update() {
    if (this.gameIsStarted === true) {
      this.level.update()
    } else {
      this.startMenu.update();
    }
  }
}
