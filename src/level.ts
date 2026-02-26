class Level {
  public entities: Entity[];
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
    this.checkCollisions();
  }

  private updateEntities() {
    for (let entity of this.entities) {
      entity.update();
    }
  }

  private checkCollisions() {
    for (let j = 0; j < this.entities.length; j++) {
      for (let i = j + 1; i < this.entities.length; i++) {
        const e1 = this.entities[j];
        const e2 = this.entities[i];
        if (e1.isCollidingWith(e2) && e2.isCollidingWith(e1)) {
          e1.onCollision(e2);
          e2.onCollision(e1);
        }
      }
    }
  }

  public draw() {
    push();
    background(0);
    /* image(images.map, 0, 0); */

    for (let entity of this.entities) {
      if (entity instanceof Player) {
        translate(
          -entity.worldX + GamePanel.screenWidth / 2 - GamePanel.tileSize / 2,
          -entity.worldY + GamePanel.worldHeight / 2 - GamePanel.tileSize / 2,
        );
      }
    }
    for (let entity of this.entities) {
      entity.draw();
    }
    pop();
  }
  public drawTreasure() {}

  public updateGame() {}
}
