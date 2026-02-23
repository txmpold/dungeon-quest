/// <reference path="entity.ts" />
class Obstacle extends Entity {
  constructor(gp: GamePanel, worldX: number, worldY: number, image: p5.Image) {
    super(gp, worldX, worldY, image);
  }

  public update() {}
  public onCollision() {}
}
