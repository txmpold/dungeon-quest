/// <reference path="entity.ts" />kk
class Projectile extends Entity {
  constructor(position: p5.Vector, direction: p5.Vector) {
    const velocity = direction;
    const row = 1;
    const col = 0;
    const totalCol = 3;
    super(position, velocity, images.weapon, row, col, totalCol);
    this.position;
  }

  public update() {
    super.update();
  }

  public onCollision() {}
}
