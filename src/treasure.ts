/// <reference path="entity.ts" />

class Treasure extends Entity {
  public isUnlocked: boolean = false;
  constructor(worldX: number, worldY: number, image: p5.Image) {
    super(worldX, worldY, image);
  }

  public onCollision(other: Entity): void {}
}
