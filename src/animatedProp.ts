/// <reference path="entity.ts" />
class AnimatedProp extends Entity {
  private animationSpeed: number;
  constructor(
    worldX: number,
    worldY: number,
    image: p5.Image,
    row: number,
    col: number,
    totalCol: number,
    animationSpeed: number,
  ) {
    super(worldX, worldY, image, undefined, row, col, totalCol);
    this.animationSpeed = animationSpeed;
  }

  public onCollision(other: Entity): void {}

  public update() {
    if (frameCount % this.animationSpeed === 0) {
      this.col++;

      if (this.col >= this.totalCol) {
        this.col = 0;
      }
    }
  }
}
