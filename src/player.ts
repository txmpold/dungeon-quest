class Player extends Entity {
  public screenX: number;
  public screenY: number;
  protected health: number;
  protected weaponInventory: p5.Image[];
  protected direction: p5.Vector;
  public attackCoolDown: number;

  constructor(
    gp: GamePanel,
    health: number,
    weaponInventory: p5.Image[],
    direction: p5.Vector,
    attackCoolDown: number,
  ) {
    const row = 0;
    const col = 0;
    const totalCol = 6;
    super(
      gp,
      GamePanel.tileSize * 14, // worldX
      GamePanel.tileSize * 12, // worldY
      createVector(0, 0),
      images.character,
      row,
      col,
      totalCol,
    );
    this.health = health;
    this.weaponInventory = weaponInventory;
    this.direction = direction;
    this.attackCoolDown = attackCoolDown;
    this.screenX = GamePanel.screenWidth / 2 - GamePanel.tileSize / 2;
    this.screenY = GamePanel.screenHeight / 2 - GamePanel.tileSize / 2;
  }

  public updatePlayerPosition() {}
  public getWeapon() {}
  public getHealth() {}
  public checkDamage() {}

  public update() {
    this.move();
    this.playerAttack();
    super.update();
  }

  /* public updatePlayerPos() {
    this.position.add(this.velocity);
  } */

  public move() {
    this.speed.set(0, 0);
    this.row = 0;

    if (keyIsDown(RIGHT_ARROW)) {
      this.speed.x = 0.25;
      this.row = 1;
      this.totalCol = 4;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.speed.x = -0.25;
      this.row = 5;
      this.totalCol = 4;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.speed.y = 0.25;
      this.row = 3;
      this.totalCol = 4;
    }
    if (keyIsDown(UP_ARROW)) {
      this.speed.y = -0.25;
      this.row = 2;
    }
  }

  public playerAttack() {
    let position = createVector(this.worldX, this.worldY);

    if (keyIsDown(RIGHT_ARROW)) {
      this.direction = createVector(4, 0);
    } else if (keyIsDown(LEFT_ARROW)) {
      this.direction = createVector(-4, 0);
    } else if (keyIsDown(DOWN_ARROW)) {
      this.direction = createVector(0, 4);
    } else if (keyIsDown(UP_ARROW)) {
      this.direction = createVector(0, -4);
    } else this.direction = createVector(4, 0);

    if (keyIsDown(32)) {
      const bullet = new Projectile(position.copy(), this.direction.copy());
      projectiles.push(bullet);
    }
  }
  public draw() {
    if (this.image) {
      image(
        this.image,
        this.screenX,
        this.screenY,
        GamePanel.tileSize,
        GamePanel.tileSize,
        this.col * GamePanel.originalTileSize,
        this.row * GamePanel.originalTileSize,
        GamePanel.originalTileSize,
        GamePanel.originalTileSize,
      );
    }
    pop();
  }
}
