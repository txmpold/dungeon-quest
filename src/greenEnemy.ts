/// <reference path="enemy.ts" />
class GreenEnemy extends Enemy {
  constructor(worldX: number, worldY: number, health: number) {
    const row = 0;
    const col = 0;
    const totalCol = 8;
    super(worldX, worldY, images.slime, row, col, totalCol, health);
  }
  public onCollision(other: Entity): void {}
}
