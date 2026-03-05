/// <reference path="enemy.ts" />
class RedEnemy extends Enemy {
  protected engage(): void {}
  constructor(
    worldX: number,
    worldY: number,
    health: number,
    levelContext: ILevelContext,
  ) {
    const row = 2;
    const col = 0;
    const totalCol = 8;
    super(
      worldX,
      worldY,
      images.slime,
      row,
      col,
      totalCol,
      health,
      levelContext,
    );
  }

  public update(entities: Entity[]) {
    this.chasePlayerWhenNearby();
    super.update(entities);
  }

  public randomMove() {
    if (random() < 0.06) {
      this.randomMove();
    } else {
      this.chasePlayerWhenNearby();
    }
  }

  private chasePlayerWhenNearby() {
    if (!this.levelContext.player) return;
    let distX = abs(this.levelContext.player.worldX - this.worldX);
    let distY = abs(this.levelContext.player.worldY - this.worldY);

    let chaseLimit = 0.6;
    let chaseSpeed = 0.16;
    this.speed.set(0, 0);

    if (
      distX < GamePanel.worldWidth * chaseLimit &&
      distY < GamePanel.worldHeight * chaseLimit
    ) {
      let enemyPos = createVector(this.worldX, this.worldY);
      let playerPos = createVector(
        this.levelContext.player.worldX,
        this.levelContext.player.worldY,
      );
      let direction = p5.Vector.sub(playerPos, enemyPos).normalize();
      this.speed.set(direction.mult(chaseSpeed));
    }
  }
}
