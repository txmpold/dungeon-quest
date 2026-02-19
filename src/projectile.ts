/// <reference path="entity.ts" />
class Projectile extends Entity {
  constructor(
    gp: GamePanel,
    worldX: number,
    worldY: number,
    speed: p5.Vector,
    image: p5.Image,
    row: number,
    col: number,
    totalCol: number,
  ) {
    super(gp, worldX, worldY, speed, image, row, col, totalCol);
  }

  public update() {
    super.update();
  }

  public onCollision() {}
}
