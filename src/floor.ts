/// <reference path="entity.ts" />

class Floor extends Entity {
  constructor(worldX: number, worldY: number) {
    super(worldX, worldY, images.tiles.floor);
  }
}
