/// <reference path="entity.ts" />
class Enemy extends Entity {
  protected health: number;

  constructor(
    gp: GamePanel,
    worldX: number,
    worldY: number,
    speed: p5.Vector,
    image: p5.Image,
    row: number,
    col: number,
    totalCol: number,
    health: number,
  ) {
    super(gp, worldX, worldY, speed, image, row, col, totalCol);
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
