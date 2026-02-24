/// <reference path="enemy.ts" />
class BlueEnemy extends Enemy {
  constructor(gp: GamePanel, worldX: number, worldY: number, health: number) {
    const row = 1;
    const col = 0;
    const totalCol = 8;
    super(gp, worldX, worldY, images.slime, row, col, totalCol, health);
  }
  public update() {
    super.update();
  }
  private shootProjectile() {}
}
