class Game {
  // private startMenu: Menu;
  private levelFactory: LevelFactory;
  private level: Level;

  constructor() {
    // this.startMenu = new Menu();
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
