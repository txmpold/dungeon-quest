/// <reference path="enemy.ts" />
class BlueEnemy extends Enemy {
  private coolDown: number = 0;
  constructor(worldX: number, worldY: number, health: number, levelContext:ILevelContext) {
    const row = 1;
    const col = 0;
    const totalCol = 8;
    super(worldX, worldY, images.slime, row, col, totalCol, health,levelContext);
  }


  //den blå monstret ska kunna gå ett steg och skjuta åt alla håll, har ett fast rörelsemönster 
  protected engage(){
    if (this.coolDown > 0){
      this.coolDown--;
    }
    this.shootProjectile();
    this.coolDown = 120;   //60fprs
  }
  public shootProjectile() {
    //1. leta efter spelaren, beräkna avståndet
    //2. Om spelaren är nära skjut åt all håll 
    if (!this.levelContext.player) return;
    let distX = abs(this.levelContext.player.worldX - this.worldX);
    let distY = abs(this.levelContext.player.worldY - this.worldY);

    let shootLimit = 0.6;  //procentuellt av skärmens yta
    let shootSpeed = 0.08;
    this.speed.set(0,0);
    if (distX < GamePanel.worldWidth * shootLimit && distY < GamePanel.worldHeight * shootLimit){
      let enemyPos = createVector(this.worldX, this.worldY);
      let playerPos = createVector(this.levelContext.player.worldX, this.levelContext.player.worldY);

      let directions = [
        {x:-1, y:0},  //left 
        {x:0, y: -1}, //up
        {x:1, y: 0}, //right
        {x:0, y: 1} //down
      ];
      // console.log(directions);

     for (let dir of directions){
      let speed = createVector(dir.x, dir.y).normalize();
      speed.mult(shootSpeed);
      
      let fireballImage = images.weapons.fireball_right;
      if ( dir.y < 0) {
        fireballImage = images.weapons.fireball_up;
      } else if (dir.y > 0) {
        fireballImage = images.weapons.fireball_down;
      } else if (dir.x < 0) {
        fireballImage = images.weapons.fireball_left;
      } else if (dir.x > 0) {
        fireballImage = images.weapons.fireball_right;
      }

      let fireball = new Projectile(
        this.worldX,
        this.worldY,
        speed,
        fireballImage,
        soundEffects.shoot,
        1, // <----- ????
        0,
        this.totalCol,
      );
      this.levelContext.entities.push(fireball);
      }
    }
  }
  public onCollision(other: Entity): void {}

}
