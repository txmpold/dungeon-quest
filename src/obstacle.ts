/// <reference path="entity.ts" />
class Obstacle extends Entity {
  constructor(worldX: number, worldY: number, image: p5.Image) {
    super(worldX, worldY, image);
  }

  public update() {}
  public onCollision(): void {}
}
