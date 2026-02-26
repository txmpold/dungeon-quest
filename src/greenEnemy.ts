/// <reference path="enemy.ts" />
class GreenEnemy extends Enemy {
  constructor(worldX: number, worldY: number, health: number, levelContext: ILevelContext) {
    const row = 0;
    const col = 0;
    const totalCol = 8;
    super(worldX, worldY, images.slime, row, col, totalCol, health, levelContext);
   
  }
  public onCollision(other: Entity): void {}

  //den gröna monstret ska jaga spelaren
  protected engage(){
    if (!this.levelContext.player) return;
    let distX = abs(this.levelContext.player.worldX - this.worldX);
    let distY = abs(this.levelContext.player.worldY - this.worldY); 

    let chaseLimit = 0.4;
    if (distX < GamePanel.worldWidth * chaseLimit && distY < GamePanel.worldHeight * chaseLimit){
      // console.log("meow");
      this.worldX = lerp(this.worldX, this.levelContext.player.worldX, 0.01);
      this.worldY = lerp(this.worldY, this.levelContext.player.worldY, 0.01);

    }


  }
}
