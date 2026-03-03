interface ILevelContext {
  player?: Player;
}

class Level implements ILevelContext {
  public player?: Player;
  public entities: Entity[];

  public isGameOver: boolean;
  public isLevelCleared: boolean = false;

  constructor(entities: Entity[]) {
    // Vad ska skapas direkt när leveln skapas?
    this.entities = entities;
    this.isGameOver = false;
  }

  public update() {
    this.updateEntities();
    this.isLevelCleared = this.isAllEnemiesDefeated();

    /* this.checkCollisions(); */
  }

  private updateEntities() {
    for (let entity of this.entities) {
      if (entity instanceof Floor || entity instanceof Obstacle) {
        continue;
      }
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

  isAllEnemiesDefeated(): boolean {
    const allDefeated = this.entities.every((entity) => {
      if (entity instanceof Enemy) {
        return entity.isKilled;
      }
      return true;
    });
    // console.log("isAllEnemiesDefeated", allDefeated);
    return allDefeated;
  }
  public drawTreasure() {}
  public updateGame() {}
}
