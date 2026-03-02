/// <reference path="entity.ts" />
class Projectile extends Entity {
  public isRemoved = false;
  public update(entities: Entity[]) {
    super.update(entities);
    if (this.speed.x === 0 && this.speed.y === 0) {
      this.isRemoved = true;
    }
  }
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

  public onCollision(other: Entity) {
    if (other instanceof Obstacle) {
      this.isRemoved = true;
      console.log("im colliding with an obstacle");
    }
  }

  draw() {
    push();
    super.draw();
    pop();
  }
}
