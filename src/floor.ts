/// <reference path="entity.ts" />

class Floor extends Entity {
  constructor(worldX: number, worldY: number, image: p5.Image) {
    super(worldX, worldY, image);
  }
  public onCollision(other: Entity): void {}
  public isCollidingWith(_other: Entity): boolean {
    return false;
  }
}
