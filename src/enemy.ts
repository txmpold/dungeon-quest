/// <reference path="entity.ts" />
class Enemy extends Entity {
  protected health: number;

  constructor(
    gp: GamePanel,
    worldX: number,
    worldY: number,
    image: p5.Image,
    row: number,
    col: number,
    totalCol: number,
    health: number,
  ) {
    const speed = createVector(0, 0);
    super(gp, worldX, worldY, image, speed, row, col, totalCol);
    this.health = health;
  }

  public update() {
    super.update();
  }

  public move() {
    this.speed.set(random(width), random(height));
    this.row = 0;
    // this.totalCol = 3;
  }
}
