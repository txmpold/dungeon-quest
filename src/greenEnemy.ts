/// <reference path="enemy.ts" />
class GreenEnemy extends Enemy {
  // private patrolX: number;
  // private patrolY: number;
  // private speed: number = 2;

  constructor(worldX: number, worldY: number, health: number) {
    const row = 0;
    const col = 0;
    const totalCol = 8;
    super(worldX, worldY, images.slime, row, col, totalCol, health);
   
  }

  public update() {
    super.update();
  }

  //den gröna monstret ska jaga spelaren
  public move(){}
  // public chase(){}
}
