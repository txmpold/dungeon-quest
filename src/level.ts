class Level {
  private entities: Entity[];
  private isLevelCompleted: boolean;
  private isGameOver: boolean;

  constructor(entities: Entity[]) {
    // Vad ska skapas direkt när leveln skapas?
    this.entities = entities;
    this.isLevelCompleted = false;
    this.isGameOver = false;
  }

  public update() {
    this.updateEntities();
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
    pop();
  }
  public drawTreasure() {}
  public checkCollisions() {}
  public updateGame() {}
}
