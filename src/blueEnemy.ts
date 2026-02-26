/// <reference path="enemy.ts" />
class BlueEnemy extends Enemy {
  constructor(worldX: number, worldY: number, health: number) {
    const row = 1;
    const col = 0;
    const totalCol = 8;
    super(worldX, worldY, images.slime, row, col, totalCol, health);
  }
  public update() {
    super.update();
  }

  //den blå monstret ska kunna gå ett steg och skjuta åt alla håll, har ett fast rörelsemönster 
  public move(){}
  public shootProjectile() {}

  public onCollision(other: Entity): void {}

}
