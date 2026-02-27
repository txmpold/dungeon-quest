/// <reference path="entity.ts" />
abstract class Enemy extends Entity {
  protected health: number;

  constructor(
    worldX: number,
    worldY: number,
    image: p5.Image,
    row: number,
    col: number,
    totalCol: number,
    health: number,
  ) {
    const speed = createVector(0, 0);
    super(worldX, worldY, image, speed, row, col, totalCol);
    this.health = health;
  }

  public move() {
    this.speed.set(random(width), random(height));
    this.row = 0;
    // this.totalCol = 3;
  }
}
