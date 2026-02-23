/// <reference path="entity.ts" />

class Floor extends Entity {
  constructor(gp: GamePanel, worldX: number, worldY: number) {
    super(gp, worldX, worldY, images.tiles.floor);
  }
}
