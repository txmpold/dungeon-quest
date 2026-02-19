/// <reference path="enemy.ts" />
class BlueEnemy extends Enemy {
  constructor(gp: GamePanel) {
    const worldX = 100;
    const worldY = 0;
    const speed = createVector(0, 0);
    const row = 1;
    const col = 0;
    const totalCol = 8;
    const health = 4;
    super(gp, worldX, worldY, speed, images.slime, row, col, totalCol, health);
  }
  public update() {
    super.update();
  }
  public shootProjectile() {}
}
