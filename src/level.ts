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
    let playerCollision: Obstacle[] = [];
    let player: Player | undefined;
    for (let j = 0; j < this.entities.length; j++) {
      for (let i = j + 1; i < this.entities.length; i++) {
        const e1 = this.entities[j];
        const e2 = this.entities[i];
        if (e1.isCollidingWith(e2) && e2.isCollidingWith(e1)) {
          if (e1 instanceof Player && e2 instanceof Obstacle) {
            playerCollision.push(e2);
            player = e1;
            continue;
          } else if (e2 instanceof Player && e1 instanceof Obstacle) {
            playerCollision.push(e1);
            player = e2;
            continue;
          }
          e1.onCollision(e2);
          e2.onCollision(e1);
        }
      }
    }

    player?.resolveObstaclesCollisions(playerCollision);
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
