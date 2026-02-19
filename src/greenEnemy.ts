/// <reference path="enemy.ts" />
class GreenEnemy extends Enemy {
  constructor(gp: GamePanel) {
    const worldX = 200;
    const worldY = 0;
    const speed = createVector(0, 0);
    const row = 0;
    const col = 0;
    const totalCol = 8;
    const health = 3;
    super(gp, worldX, worldY, speed, images.slime, row, col, totalCol, health);
  }

  public update() {
    super.update();
  }
}
