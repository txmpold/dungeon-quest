class Player extends Entity {
  public screenX: number;
  public screenY: number;
  public solidAreaX: number = 8;
  public solidAreaY: number = 16;
  public solidAreaH: number = 32;
  public solidAreaW: number = 32;
  protected health: number;
  /* protected weaponInventory: p5.Image[];
  public attackCoolDown: number; */
  protected direction: p5.Vector;
  private playerPos = createVector(0, 0);
  private level: Level;

  constructor(
    gp: GamePanel,
    worldX: number,
    worldY: number,
    health: number,
    level: Level,
  ) /* 
    weaponInventory: p5.Image[],
    attackCoolDown: number, */ {
    const row = 0;
    const col = 0;
    const totalCol = 6;
    super(
      gp,
      worldX,
      worldY,
      images.character,
      createVector(0, 0),
      row,
      col,
      totalCol,
    );
    /* this.attackCoolDown = attackCoolDown; */
    this.health = health;
    this.level = level;
    this.direction = this.speed.copy();
    this.screenX = GamePanel.screenWidth / 2 - GamePanel.tileSize / 2;
    this.screenY = GamePanel.screenHeight / 2 - GamePanel.tileSize / 2;
    this.playerPos = createVector(this.screenX, this.screenY);
  }

  public getWeapon() {}
  public getHealth() {}
  public checkDamage() {}

  public update() {
    this.move();
    this.playerAttack();
    super.update();
  }

  public updatePlayerPos() {
    this.playerPos.add(this.speed);
  }

  public move() {
    this.speed.set(0, 0);

    if (keyIsDown(RIGHT_ARROW)) {
      this.speed.x = 0.25;
      this.row = 1;
      this.totalCol = 4;
      this.direction.set(1, 0);
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.speed.x = -0.25;
      this.row = 5;
      this.totalCol = 4;
      this.direction.set(-1, 0);
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.speed.y = 0.25;
      this.row = 3;
      this.totalCol = 4;
      this.direction.set(0, 1);
    }
    if (keyIsDown(UP_ARROW)) {
      this.speed.y = -0.25;
      this.row = 2;
      this.direction.set(0, -1);
    }
  }

  public playerAttack() {
    if (keyIsDown(32)) {
      soundEffects.shoot.play();
      let fireball = new Projectile(
        this.gp,
        this.worldX,
        this.worldY,
        this.direction.copy().mult(0.4),
        images.weapon,
        soundEffects.shoot,
        1, // <----- ????
        0,
        this.totalCol,
      );
      this.level.entities.push(fireball);
    }
  }
}
