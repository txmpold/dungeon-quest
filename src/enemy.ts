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

  public move(obstacle: Obstacle) {
    this.speed.set(random(width), random(height));
    this.row = 0;
    // this.totalCol = 3;
  }
  public update() {
    this.engage();
  }

  protected abstract engage(): void;
}
