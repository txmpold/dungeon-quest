class Game {
  public levelFactory: LevelFactory;
  public gp: GamePanel;
  public player: Player;
  // private startMenu: Menu;
  /* public levelFactory: LevelFactory; */

  constructor() {
    // this.startMenu = new Menu();
    this.levelFactory = new LevelFactory(tiles, 0, 0, levelOneGrid);
    this.gp = new GamePanel();
    this.player = new Player(this.gp, 5);
  }

  public update() {
    this.player.update();
  }
  public draw() {
    background('white');
    this.levelFactory.draw(this.player);
    this.player.draw();
  }
}
