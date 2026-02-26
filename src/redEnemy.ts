/// <reference path="enemy.ts" />
class RedEnemy extends Enemy {
  constructor(worldX: number, worldY: number, health: number, levelContext: ILevelContext) {
    const row = 2;
    const col = 0;
    const totalCol = 8;
    super(worldX, worldY, images.slime, row, col, totalCol, health, levelContext);
  }

   //den blå monstret ska kunna flygga, dessa kan ta sig över väggar och vatten som finns i rummen
   public shootProjectile() {
  
   }
   protected engage(){
    
   }

  public onCollision(other: Entity): void {}
}
