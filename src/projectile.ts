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
    row: number,
    col: number,
    totalCol: number,
  ) {
    super(worldX, worldY, image, direction, row, col, totalCol);
  }

  public onCollision(other: Entity) {
    this.isRemoved = true;
    if (other instanceof Obstacle) {
      console.log("im colliding with an obstacle");
    }
    if (other instanceof Enemy) {
      other.takeDamage(1);
    }
  }

  draw() {
    push();
    super.draw();
    pop();
  }
}
