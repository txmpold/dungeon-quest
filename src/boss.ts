/// <reference path="enemy.ts" />

// const size = 32; --> was ist das?
class Boss extends Enemy {
  constructor(
    worldX: number,
    worldY: number,
    health: number,
    levelContext: ILevelContext,
  ) {
    const row = 0;
    const col = 0;
    const totalCol = 7;
    super(
      worldX,
      worldY,
      images.boss,
      row,
      col,
      totalCol,
      health,
      levelContext,
    );
  }

  protected engage(): void {}
  public shootProjectile() {}
  public onCollision(_other: Entity): void {}
}
