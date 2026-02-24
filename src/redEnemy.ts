/// <reference path="enemy.ts" />
class RedEnemy extends Enemy {
  constructor() {
    const worldX = 300;
    const worldY = 0;
    const speed = createVector(0, 0);
    const row = 2;
    const col = 0;
    const totalCol = 8;
    const health = 5;
    super(worldX, worldY, speed, images.slime, row, col, totalCol, health);
  }
  public update() {
    super.update();
  }
  public shootProjectile() {}
}
