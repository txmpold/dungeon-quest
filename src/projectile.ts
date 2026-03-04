/// <reference path="entity.ts" />
class Projectile extends Entity {
  private friendly: boolean;
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
    friendly = true,
  ) {
    super(worldX, worldY, image, direction, row, col, totalCol);
    this.friendly = friendly;
  }

  public onCollision(other: Entity) {
    this.isRemoved = true;

    if (other instanceof Enemy && this.friendly) {
      other.takeDamage(1);
    }
    if (other instanceof Enemy && !this.friendly) {
      this.isRemoved = false;

    }
  }

  draw() {
    push();
    super.draw();
    pop();
  }
}
