/// <reference path="enemy.ts" />
class BlueEnemy extends Enemy {
  private shootCooldown = 0;
  private directions = [
    { x:-1, y:0, img: images.weapons.fireball_left },  //left 
    { x:0, y: -1, img: images.weapons.fireball_up }, //up
    { x:1, y: 0, img: images.weapons.fireball_right }, //right
    { x:0, y: 1, img: images.weapons.fireball_down } //down
  ];

  constructor(worldX: number, worldY: number, health: number, levelContext:ILevelContext) {
    const row = 1;
    const col = 0;
    const totalCol = 8;
    super(
      worldX,
      worldY,
      images.slime,
      row,
      col,
      totalCol,
      health,
      levelContext,
    );
  }
  public onCollision(other: Entity): void {}

  public move(){
    // this.speed.set(0,0);
    const walkSpeed = 0.05; // labba med detta
    for (let dir of this.directions) {
      let speed = createVector(dir.x, dir.y).mult(walkSpeed);
      return speed;
    }
    console.log(this.speed);
    
  }

  //den blå monstret ska kunna gå ett steg och skjuta åt alla håll, har ett fast rörelsemönster 
  protected engage(){ 
    if (this.shootCooldown > 0){
      this.shootCooldown -= deltaTime;
      if (this.shootCooldown > 200) { //labba med detta
        this.speed.set(0,0); // stanna
      }
      return;
    }
    this.shootProjectile();
    this.shootCooldown = random(1_500, 2_500);  //labba med detta
    this.move();// starta
  }


  private playerIsNearby() {
    if (!this.levelContext.player) return false;
    let distX = abs(this.levelContext.player.worldX - this.worldX);
    let distY = abs(this.levelContext.player.worldY - this.worldY);

    let shootLimit = 0.4;  //procentuellt av skärmens yta
    return distX < GamePanel.worldWidth * shootLimit && distY < GamePanel.worldHeight * shootLimit;
  }
  
  private shootProjectile() {
    //1. leta efter spelaren, beräkna avståndet
    //2. Om spelaren är nära skjut åt all håll 
    if (!this.levelContext.player) return;
    if (!this.playerIsNearby()) return;
    
    let shootSpeed = 0.2; //labba med detta
  
    for (let dir of this.directions) {
      let speed = createVector(dir.x, dir.y).mult(shootSpeed)

      let fireball = new Projectile(
        this.worldX,
        this.worldY,
        speed,
        dir.img,
        soundEffects.shoot,
        1,
        0,
        this.totalCol,
      );
      this.levelContext.entities.push(fireball);
      }
  }
}
