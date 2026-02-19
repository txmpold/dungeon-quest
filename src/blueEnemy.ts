/// <reference path="enemy.ts" />
class BlueEnemy extends Enemy {
  constructor() {
    const position = createVector(100, 0);
    const velocity = createVector(0, 0);

    const row = 1;
    const col = 0;
    const totalCol = 8;
    const health = 4;
    super(position, velocity, images.slime, row, col, totalCol, health);
  }
  public update() {
    super.update();
  }
  public shootProjectile() {}
}
