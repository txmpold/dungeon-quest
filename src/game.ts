class Game {
  public levelFactory: LevelFactory;
  public level: Level;
  private startMenu: StartMenu;
  public gameIsStarted: boolean = false;

  constructor() {
    this.levelFactory = new LevelFactory(tiles, 0, 0);
    this.level = new Level([]);
    this.startMenu = new StartMenu(this);
  }

  public startGame() {
    this.gameIsStarted = true;
    this.level = this.levelFactory.generateLevel(0);
  }

  public draw() {
    cursor("assets/images/swordcursor.png");
    background(0);
    if (this.gameIsStarted === true) {
      noCursor();
      this.level.draw();
    } else {
      this.startMenu.draw();
    }
  }

  public update() {
    if (this.gameIsStarted === true) {
      this.level.update();
      this.level.entities = this.level.entities.filter(
        (entity) => !(entity instanceof Projectile) || !entity.isRemoved,
      );
    } else {
      this.startMenu.update();
    }
  }
}
