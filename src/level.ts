class Level {
  private entities: Entity[];
  private isLevelCompleted: boolean;
  private isGameOver: boolean;

  constructor() {
    // Vad ska skapas direkt när leveln skapas?
    this.entities = [new Entity()];
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
    background(0);
    for (let entity of this.entities) {
      entity.draw();
    }
    pop();
  }
}
