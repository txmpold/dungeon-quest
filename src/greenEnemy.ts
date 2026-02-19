/// <reference path="enemy.ts" />
class GreenEnemy extends Enemy {
  constructor() {
    const position = createVector(50, 0);
    const velocity = createVector(0, 0);

    const row = 0;
    const col = 0;
    const totalCol = 8;
    const health = 3;
    super(position, velocity, images.slime, row, col, totalCol, health);
  }

  public update() {
    super.update();
  }
}
