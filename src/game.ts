class Game {
  private startMenu: StartMenu;
  private levelFactory: LevelFactory;

  constructor() {
    this.startMenu = new StartMenu();
    this.levelFactory = new LevelFactory();
  }

  public update() {
    this.startMenu.update();
    this.levelFactory.update();
  }
  public draw() {
    this.startMenu.draw();
  }
}
