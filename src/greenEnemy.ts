/// <reference path="enemy.ts" />
class GreenEnemy extends Enemy {
  protected health: number;
  // private direction: p5.Vector;
  private greenPos = createVector(0, 0);
  private level: Level;

  constructor(worldX: number, worldY: number, health: number, level: Level) {
    const row = 0;
    const col = 0;
    const totalCol = 8;
    const health = 3;
    super(worldX, worldY, speed, images.slime, row, col, totalCol, health);
  }

  public update() {
    super.update();
  }
}
