/// <reference path="entity.ts" />
class Projectile extends Entity {
  constructor(
    worldX: number,
    worldY: number,
    direction: p5.Vector,
    image: p5.Image,
    soundEffects: p5.SoundFile,
    row: number,
    col: number,
    totalCol: number,
  ) {
    super(worldX, worldY, image, direction, row, col, totalCol);
  }

  public update() {
    super.update();
  }

  public onCollision() {}

  draw() {
    push();
    super.draw();
    pop();
  }
}
