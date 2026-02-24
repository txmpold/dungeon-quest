class Game {
  public levelFactory: LevelFactory;
  public level: Level;
  private startMenu: StartMenu;

  constructor() {
    this.levelFactory = new LevelFactory(tiles, 0, 0);
    this.level = this.levelFactory.generateLevel(0);
    this.startMenu = new StartMenu(this);
  }

  public update() {
    this.level.update();
  }

  public draw() {
    background("white");
    this.level.draw();
    // this.levelFactory.draw();
  }
}
