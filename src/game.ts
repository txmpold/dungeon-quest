class Game {
  public levelFactory: LevelFactory;
  public gp: GamePanel;
  public level: Level;
  // private startMenu: Menu;

  constructor() {
    // this.startMenu = new Menu();
    this.levelFactory = new LevelFactory(tiles, 0, 0);
    this.gp = new GamePanel(this.levelFactory);
    this.level = this.levelFactory.generateLevel(this.gp, 0);
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
