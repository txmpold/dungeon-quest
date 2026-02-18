/// <reference path="entity.ts" />
class GreenEnemy extends Entity {
  constructor() {
    const position = createVector(50, 0);
    const velocity = createVector(0, 0);

    const row = 0;
    const col = 0;
    const totalCol = 8;
    super(position, velocity, images.slime, row, col, totalCol);
  }
}
