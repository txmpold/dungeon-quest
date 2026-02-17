class Game {
  // private startMenu: Menu;
  private levelFactory: LevelFactory;

  constructor() {
    // this.startMenu = new Menu();
    this.levelFactory = new LevelFactory();
  }

  public update() {
    this.levelFactory.update();
  }
  public draw() {
    this.levelFactory.draw();
  }
}
