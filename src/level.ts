interface ILevelContext {
  player?: Player;
  entities: Entity[];
}

class Level implements ILevelContext {
  public player?: Player;
  public entities: Entity[];
  private isLevelCompleted: boolean;
  public isGameOver: boolean;

  constructor(entities: Entity[]) {
    // Vad ska skapas direkt när leveln skapas?
    this.entities = entities;
    this.isLevelCompleted = false;
    this.isGameOver = false;
  }

  public update() {
    this.updateEntities();
    /* this.checkCollisions(); */
  }

  private updateEntities() {
    for (let entity of this.entities) {
      entity.update(this.entities);
    }
  }

  public draw() {
    push();
    background(0);
    /* image(images.map, 0, 0); */

    const playerEntity = this.entities.find(
      (e) => e instanceof Player,
    ) as Player;
    if (playerEntity) {
      translate(
        -playerEntity.worldX +
          GamePanel.screenWidth / 2 -
          GamePanel.tileSize / 2,
        -playerEntity.worldY +
          GamePanel.worldHeight / 2 -
          GamePanel.tileSize / 2,
      );
    }

    for (let entity of this.entities) {
      if (entity instanceof Player) {
        entity.draw();
      } else {
        const distX = Math.abs(entity.worldX - playerEntity.worldX);
        const distY = Math.abs(entity.worldY - playerEntity.worldY);
        if (
          distX < GamePanel.screenWidth / 2 + GamePanel.tileSize &&
          distY < GamePanel.screenHeight / 2 + GamePanel.tileSize
        ) {
          entity.draw();
        }
      }
    }

    pop();
  }
  public drawTreasure() {}

  public updateGame() {}
}
