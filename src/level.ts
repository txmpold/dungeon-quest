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
  }

  private updateEntities() {
    for (let entity of this.entities) {
      entity.update();
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
  public checkCollisions() {}
  public updateGame() {}
}
