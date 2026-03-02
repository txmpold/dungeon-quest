/// <reference path="enemy.ts" />
class BlueEnemy extends Enemy {
  constructor(worldX: number, worldY: number, levelContext: ILevelContext) {
    const row = 1;
    const col = 0;
    const totalCol = 8;
    super(worldX, worldY, images.slime, row, col, totalCol, 5, levelContext);
  }

  //den blå monstret ska kunna gå ett steg och skjuta åt alla håll, har ett fast rörelsemönster
  protected engage() {}
  public shootProjectile() {}

  public onCollision(other: Entity): void {}
}
