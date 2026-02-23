/// <reference path="enemy.ts" />
class BlueEnemy extends Enemy {
  constructor() {
    const worldX = A0;
    const worldY = 0;
    const speed = createVector(0, 0);
    const row = 1;
    const col = 0;
    const totalCol = 8;
    const health = 4;
    super(worldX, worldY, speed, images.slime, row, col, totalCol, health);
  }
  public update() {
    super.update();
  }
  public shootProjectile() {}
}
