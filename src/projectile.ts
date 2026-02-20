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
  ) {
    super(worldX, worldY, speed, images.weapon, row, col, totalCol);
    this.worldX = worldX;
    this.worldY = worldY;
    this.speed = speed;
    this.image = image;
    this.row = row;
    this.col = col;
    this.totalCol = totalCol;
  }

  public update() {
    super.update();
  }

  public onCollision() {}
}
