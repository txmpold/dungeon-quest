/// <reference path="enemy.ts" />
class RedEnemy extends Enemy {
  constructor(gp: GamePanel) {
    const worldX = 300;
    const worldY = 0;
    const speed = createVector(0, 0);
    const row = 2;
    const col = 0;
    const totalCol = 8;
    super(gp, worldX, worldY, speed, images.slime, row, col, totalCol);
  }
  public update() {
    super.update();
  }
}
