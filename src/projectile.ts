/// <reference path="entity.ts" />
class Projectile extends Entity {
  constructor(
    worldX: number,
    worldY: number,
    speed: p5.Vector,
    image: p5.Image,
    row: number,
    col: number,
    totalCol: number,
    direction: p5.Vector,
  ) {
    super(worldX, worldY, images.weapon, speed, row, col, totalCol);
    this.worldX = worldX;
    this.worldY = worldY;
    this.speed = speed;
    this.image = image;
    this.row = row;
    this.col = col;
    this.totalCol = totalCol;
    direction;
  }

  public update() {
    super.update();
  }

  public onCollision() {}
}
