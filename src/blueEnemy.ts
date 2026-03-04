/// <reference path="enemy.ts" />
class BlueEnemy extends Enemy {
  private patrolDirectionIndex = 0;
  private patrolTimer = 0;
  private nrOfPatrolSteps = 120; 
  private shootCooldown = 0; //frames per håll
   private directions = [
    { x:0, y: -1, img: images.weapons.fireball_up }, //up
    { x:0, y: 1, img: images.weapons.fireball_down }, //down
    { x:-1, y:0, img: images.weapons.fireball_left }, //left 
    { x:1, y: 0, img: images.weapons.fireball_right }, //right
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

  public update(entities: Entity[]) {
    this.engage();
    super.update(entities);
  }
  
  //den blå monstret ska kunna gå ett steg och skjuta åt alla håll, har ett fast rörelsemönster 
  public move(){
      const walkSpeed = 0.08;
      const dir = this.directions[this.patrolDirectionIndex]; 
      let speed = createVector(dir.x, dir.y).mult(walkSpeed);
      this.speed.set(speed);
      this.patrolTimer++;
      
      if (this.patrolTimer >= this.nrOfPatrolSteps){
        this.patrolTimer= 0; 
        this.patrolDirectionIndex = floor(random() * this.directions.length);
      }
  } 
  
  protected engage() {
    this.move();
    if (this.playerIsNearby()){
      if (this.shootCooldown > 0){
        this.shootCooldown -= deltaTime;
        if (this.shootCooldown < 200) { //labba med detta
          this.speed.set(0,0); // stanna
        }
        return;
      }
      this.shootProjectile();
      this.shootCooldown = random(1_500, 2_500);  //labba med detta
    }
  }
  private playerIsNearby() {
  if (!this.levelContext.player) return false;
  let distX = abs(this.levelContext.player.worldX - this.worldX);
  let distY = abs(this.levelContext.player.worldY - this.worldY);
  let shootLimit = 0.4;  //procentuellt av skärmens yta
  return distX < GamePanel.worldWidth * shootLimit && distY < GamePanel.worldHeight * shootLimit;
  }

  private shootProjectile() {
    //Om spelaren är nära stanna, skjut åt all håll 
    if (!this.levelContext.player) return;
    const shootSpeed = 0.2;
    
    for (let dir of this.directions){
      let speed = createVector(dir.x, dir.y).mult(shootSpeed);
  
      let fireball = new Projectile(
        this.worldX,
        this.worldY,
        speed,
        dir.img,
        1,
        0,
        this.totalCol,
        false,
      );
      this.levelContext.entities.push(fireball);
    }

  }   
}

