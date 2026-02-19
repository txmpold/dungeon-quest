/// <reference path="enemy.ts" />
class RedEnemy extends Enemy {
  constructor() {
    const position = createVector(150, 0);
    const velocity = createVector(0, 0);

    const row = 2;
    const col = 0;
    const totalCol = 8;
    const health = 5;
    super(position, velocity, images.slime, row, col, totalCol, health);
  }
  public update() {
    super.update();
  }
  public shootProjectile() {}
}
