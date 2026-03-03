class Player extends Entity {
  public screenX: number;
  public screenY: number;
  protected health: number;
  /* protected weaponInventory: p5.Image[];
  public attackCoolDown: number; */
  protected direction: p5.Vector;
  private playerPos = createVector(0, 0);
  private level: Level;
  private damageCooldown: number = 0;
  private attackCooldown: number = 0;
  constructor(worldX: number, worldY: number, health: number, level: Level) /* 
    weaponInventory: p5.Image[],
    attackCoolDown: number, */ {
    const row = 0;
    const col = 0;
    const totalCol = 6;
    super(
      worldX,
      worldY,
      images.character,
      createVector(0, 0),
      row,
      col,
      totalCol,
      20,
    );
    /* this.attackCoolDown = attackCoolDown; */
    this.health = health;
    this.level = level;
    this.direction = this.speed.copy();
    this.screenX = GamePanel.screenWidth / 2 - GamePanel.tileSize / 2;
    this.screenY = GamePanel.screenHeight / 2 - GamePanel.tileSize / 2;
    this.playerPos = createVector(this.screenX, this.screenY);
    this.hitBoxX = 8;
    this.hitBoxY = 16;
    this.hitBoxW = 32;
    this.hitBoxH = 32;
  }

  public onCollision(other: Entity): void {}

  public resolveObstaclesCollisions(obstacles: Obstacle[]) {
    if (obstacles.length === 0) return;
    this.worldX -= this.speed.x * deltaTime;
    let isAllCollisionsResolved = true;
    for (let obstacle of obstacles) {
      if (this.isCollidingWith(obstacle)) {
        isAllCollisionsResolved = false;
        break;
      }
    }
    if (isAllCollisionsResolved) {
      return;
    } else {
      this.worldX += this.speed.x * deltaTime;
    }

    this.worldY -= this.speed.y * deltaTime;
    isAllCollisionsResolved = true;
    for (let obstacle of obstacles) {
      if (this.isCollidingWith(obstacle)) {
        isAllCollisionsResolved = false;
        break;
      }
    }
    if (isAllCollisionsResolved) {
      return;
    } else {
      this.worldX -= this.speed.x * deltaTime;
    }
  }

  public getWeapon() {}
  public getHealth() {}

  public update(entities: Entity[]) {
    this.move();
    this.playerAttack();
    super.update(entities);
    this.checkEnemyCollision(entities);
    this.isPlayerDead();
  }

  private isPlayerDead() {
    if (this.health <= 0) {
      game.gameIsStarted = false;
      music.gameMusic.stop();
      game.changeScene(new GameOverMenu());
      // this.level.isGameOver = true;
    }
  }

  private checkEnemyCollision(entities: Entity[]) {
    for (const entity of entities) {
      if (entity instanceof Enemy && this.isCollidingWith(entity)) {
        if (this.damageCooldown <= 0) {
          this.health -= 1;
          this.damageCooldown = 4000;
        }
      }
    }
    this.damageCooldown -= deltaTime * 6;
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
    let x = this.direction.x;
    let y = this.direction.y;
    if (keyIsDown(32) && this.attackCooldown <= 0) {
      soundEffects.fireball.play(0, 1, 5);
      this.attackCooldown = 7000;

      let fireballImage = images.weapons.fireball_right;
      if (y < 0) {
        fireballImage = images.weapons.fireball_up;
      } else if (y > 0) {
        fireballImage = images.weapons.fireball_down;
      } else if (x < 0) {
        fireballImage = images.weapons.fireball_left;
      } else if (x > 0) {
        fireballImage = images.weapons.fireball_right;
      }
      let fireball = new Projectile(
        this.worldX,
        this.worldY,
        this.direction.copy().mult(0.35),
        fireballImage,
        1, // <----- ????
        0,
        this.totalCol,
      );

      this.level.entities.push(fireball);
      fireball.setHitBox(
        GamePanel.tileSize * 0.27,
        GamePanel.tileSize * 0.4,
        GamePanel.tileSize * 0.5,
        GamePanel.tileSize * 0.7,
      );

      if (x === 0 && y === 0) {
        fireball.speed.set(0.4, 0);
      }
    }
    this.attackCooldown -= deltaTime * 6;
  }
}
