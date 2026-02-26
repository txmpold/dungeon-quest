/// <reference path="enemy.ts" />
class GreenEnemy extends Enemy {
  // private patrolX: number;
  // private patrolY: number;
  // private speed: number = 2;

  constructor(worldX: number, worldY: number, health: number, levelContext: ILevelContext) {
    const row = 0;
    const col = 0;
    const totalCol = 8;
    super(worldX, worldY, images.slime, row, col, totalCol, health, levelContext);
   
  }
  public onCollision(other: Entity): void {}

  //den gröna monstret ska jaga spelaren
  protected engage(){
  }
  // public chase(){}
}
