class Game {
  public gp: GamePanel;
  // private startMenu: Menu;
  /* public levelFactory: LevelFactory; */
  public player: Player;
  private level: Level;

  constructor() {
    // this.startMenu = new Menu();
    /* this.levelFactory = new LevelFactory(tiles, 0, 0, levelOneGrid); */
    this.level = new Level();
    this.gp = new GamePanel();
    this.player = new Player(this.gp);
  }

  public update() {
    this.player.update();
  }
  public draw() {
    background("white");
    this.level.draw();
    this.player.draw();
  }
}
