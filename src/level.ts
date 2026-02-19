class Level {
  public gp: GamePanel;
  private entities: Entity[];
  private isLevelCompleted: boolean;
  private isGameOver: boolean;

  constructor(gp: GamePanel) {
    // Vad ska skapas direkt när leveln skapas?
    this.gp = gp;
    this.entities = [
      new Player(this.gp, 5),
      new GreenEnemy(this.gp),
      new RedEnemy(this.gp),
      new BlueEnemy(this.gp),
      new Boss(),
      // new Projectile(),
    ];
    this.isLevelCompleted = false;
    this.isGameOver = false;
  }

  public update() {
    this.updateEntities();
    this.draw();
  }

  private updateEntities() {
    for (let entity of this.entities) {
      entity.update();
    }
  }

  public draw() {
    push();
    /* background(255); */
    /* image(images.map, 0, 0); */
    for (let entity of this.entities) {
      entity.draw();
    }
    for (let projectile of projectiles) {
      projectile.draw();
      projectile.update();
    }
    pop();
  }
  public drawTreasure() {}
  public checkCollisions() {}
  public updateGame() {}
}
