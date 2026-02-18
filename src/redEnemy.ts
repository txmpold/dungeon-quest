/// <reference path="entity.ts" />
class RedEnemy extends Entity {
  constructor() {
    const position = createVector(100, 0);
    const velocity = createVector(0, 0);

    const row = 2;
    const col = 0;
    const totalCol = 8;
    super(position, velocity, images.slime, row, col, totalCol);
  }
}
