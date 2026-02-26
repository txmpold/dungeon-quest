/// <reference path="entity.ts" />
abstract class Enemy extends Entity {
  protected health: number;
  protected levelContext: ILevelContext;

  constructor(
    worldX: number,
    worldY: number,
    image: p5.Image,
    row: number,
    col: number,
    totalCol: number,
    health: number,
    levelContext: ILevelContext,
  ) {
    const speed = createVector(0, 0);
    super(worldX, worldY, image, speed, row, col, totalCol, 10);
    this.health = health;
    this.levelContext = levelContext;
  }

  public update() {
    this.engage();
    super.update();
  }

  protected abstract engage(): void;
}
