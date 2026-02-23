class Game {
  public gp: GamePanel;
  public levelFactory: LevelFactory;
  public level: Level;
  // private startMenu: Menu;

  constructor() {
    // this.startMenu = new Menu();
    this.levelFactory = new LevelFactory(tiles, 0, 0);
    this.gp = new GamePanel(this.levelFactory);
    this.level = this.levelFactory.generateLevel(0, this.gp);
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
