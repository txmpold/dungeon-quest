/// <reference path="entity.ts" />
class Enemy extends Entity {
  constructor() {
    const position = createVector(0, 0);
    const velocity = createVector(0, 0);

    const row = 0;
    const col = 0;
    const totalCol = 8;
    super(position, velocity, images.slime, row, col, totalCol);
  }

  public update() {
    super.update();
  }

  public move() {
    this.velocity.set(random(width), random(height));
    this.row = 0;
    // this.totalCol = 3;
  }
}
