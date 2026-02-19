/// <reference path="enemy.ts" />

const size = 32;
class Boss extends Enemy {
  constructor() {
    const position = createVector(300, 0);
    const velocity = createVector(0, 0);

    const row = 1;
    const col = 1;
    const totalCol = 7;
    const health = 10;
    super(position, velocity, images.slime, row, col, totalCol, health);
  }

  public update() {
    super.update();
  }
  public shootProjectile() {}
}
