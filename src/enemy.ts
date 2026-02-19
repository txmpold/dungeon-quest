/// <reference path="entity.ts" />
class Enemy extends Entity {
  protected health: number;

  constructor(
    position: p5.Vector,
    velocity: p5.Vector,
    image: p5.Image,
    row: number,
    col: number,
    totalCol: number,
    health: number,
  ) {
    position = position;
    velocity = velocity;
    row = row;
    col = col;
    totalCol = totalCol;
    super(position, velocity, image, row, col, totalCol);
    this.health = health;
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
