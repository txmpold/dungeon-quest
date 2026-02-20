/// <reference path="entity.ts" />
class Obstacle extends Entity {
  constructor(worldX: number, worldY: number, ) {
    super(worldX, worldY, images.tiles.floor);
  }

  public update() {}
  public onCollision() {}
}
