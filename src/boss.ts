/// <reference path="enemy.ts" />

// const size = 32; --> was ist das?
class Boss extends Enemy {
  constructor(worldX: number, worldY: number, health:number) {
    const row = 0;
    const col = 0;
    const totalCol = 7;
    super(worldX, worldY, images.boss, row, col, totalCol, health);
  }

  public update() {
    super.update();
  }

  public shootProjectile() {}

}
