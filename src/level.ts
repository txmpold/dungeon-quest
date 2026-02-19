class Level {
  private entities: Entity[];
  private isLevelCompleted: boolean;
  private isGameOver: boolean;

  constructor() {
    // Vad ska skapas direkt när leveln skapas?
    this.entities = [
      /* new Player(),
      new GreenEnemy(),
      new RedEnemy(),
      new BlueEnemy(),
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
    ];

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
