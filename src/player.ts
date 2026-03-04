class Player extends Entity {
  public screenX: number;
  public screenY: number;
  protected health: string[];
  protected direction: p5.Vector;
  private playerPos = createVector(0, 0);
  private level: Level;
  private damageCooldown: number = 0;
  private attackCooldown: number = 0;
  private isDead: boolean = false;
  private deathTimer: number = 0;
  private flashTimer: number = 0;
  private isFlashing: boolean = false;

  constructor(worldX: number, worldY: number, health: string[], level: Level) {
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

  public onCollision(other: Entity): void {
    if (other instanceof Treasure && this.level.isLevelCleared) {
      soundEffects.treasureOpening.play();
      console.log("Player collided with treasure");
      game.gameIsStarted = false;
      if (game.levelFactory.currentLevel === 1) {
        game.changeScene(new TreasureChoiceScene(images.treasureChoices.boots));
      } else if (game.levelFactory.currentLevel === 2) {
        game.changeScene(
          new TreasureChoiceScene(images.treasureChoices.fireball),
        );
      }
    }
  }

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

  public update(entities: Entity[]) {
    this.isPlayerDead();
    if (this.isDead) {
      this.deathTimer += deltaTime;

      if (this.deathTimer > 1200) {
        game.gameIsStarted = false;
        game.changeScene(new GameOverMenu());
      }
      return;
    }
    this.move();
    this.playerAttack();
    super.update(entities);
    this.checkEnemyCollision(entities);
  }

  private isPlayerDead() {
    if (this.health.length === 0 && !this.isDead) {
      this.isDead = true;

      this.row = 4;
      this.col = 2;
      this.totalCol = 1;
      this.speed.set(0, 0);

      // game.gameIsStarted = false;
      music.gameMusic.stop();
      // game.changeScene(new GameOverMenu());
      // this.level.isGameOver = true;
    }
  }

  private checkEnemyCollision(entities: Entity[]) {
    for (const entity of entities) {
      if (entity instanceof Enemy && this.isCollidingWith(entity) || entity instanceof Projectile && this.isCollidingWith(entity) && !entity.friendly) {
        if (this.damageCooldown <= 0) {
          this.health.pop();
          this.damageCooldown = 1000;
          this.isFlashing = true;
          this.flashTimer = 0;

          soundEffects.takingdmg.play(0, 1, 0.5);
          console.log("Player health: " + this.health.length);
        }
      }
    }

    if (this.damageCooldown > 0) {
      this.damageCooldown -= deltaTime;
    }

    if (this.isFlashing) {
      this.flashTimer += deltaTime;
      if (this.damageCooldown <= 0) {
        this.isFlashing = false;
        this.flashTimer = 0;
      }
    }
  }

  public updatePlayerPos() {
    this.playerPos.add(this.speed);
  }

  public move() {
    if (this.isDead) return;
    this.speed.set(0, 0);

    if (keyIsDown(RIGHT_ARROW)) {
      this.speed.x = 0.25;
      if (game.playerinventory.includes(images.treasureChoices.boots)) {
        this.speed.x = 0.3;
      }
      this.row = 1;
      this.totalCol = 4;
      this.direction.set(1, 0);
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.speed.x = -0.25;
      if (game.playerinventory.includes(images.treasureChoices.boots)) {
        this.speed.x = -0.3;
      }

      this.row = 5;
      this.totalCol = 4;
      this.direction.set(-1, 0);
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.speed.y = 0.25;
      if (game.playerinventory.includes(images.treasureChoices.boots)) {
        this.speed.y = 0.3;
      }
      this.row = 3;
      this.totalCol = 4;
      this.direction.set(0, 1);
    }
    if (keyIsDown(UP_ARROW)) {
      this.speed.y = -0.25;
      if (game.playerinventory.includes(images.treasureChoices.boots)) {
        this.speed.y = -0.3;
      }
      this.row = 2;
      this.direction.set(0, -1);
    }
  }

  public playerAttack() {
    let x = this.direction.x;
    let y = this.direction.y;
    if (keyIsDown(32) && this.attackCooldown <= 0) {
      soundEffects.fireball.play(0, 1, 5);
      this.attackCooldown = 5000;
      if (game.playerinventory.includes(images.treasureChoices.fireball)) {
        this.attackCooldown = 1500;
      }

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
        this.direction.copy().mult(0.4),
        fireballImage,
        1, // <----- ????
        0,
        this.totalCol,
        true
      );

      fireball.setHitBox(
        GamePanel.tileSize * 0.27,
        GamePanel.tileSize * 0.4,
        GamePanel.tileSize * 0.5,
        GamePanel.tileSize * 0.7,
      );
      this.level.entities.push(fireball);

      if (x === 0 && y === 0) {
        fireball.speed.set(0.4, 0);
      }
    }
    this.attackCooldown -= deltaTime * 6;
  }
  public draw() {
    push();

    push();
    resetMatrix();
    for (let hp = 0; hp < this.health.length; hp++) {
      image(images.heart, 10 + hp * 35, 10, 32, 32);
    }
    for (let hp = 5; hp < this.health.length; hp++) {
      image(images.treasureChoices.heal, 10 + hp * 35, 10, 32, 32);
    }
    for (
      let itemIndex = 0;
      itemIndex < game.playerinventory.length;
      itemIndex++
    ) {
      const itemImage = game.playerinventory[itemIndex];
      image(itemImage, 10 + itemIndex * 35, 50, 32, 32);
    }
    pop();

    if (this.isDead) {
      push();
      image(
        this.image,
        this.worldX,
        this.worldY,
        GamePanel.tileSize,
        GamePanel.tileSize,
        2 * GamePanel.originalTileSize,
        4 * GamePanel.originalTileSize,
        GamePanel.originalTileSize,
        GamePanel.originalTileSize,
      );
      pop();
      pop();
      return;
    }

    if (this.isFlashing) {
      const flashInterval = 150;
      const shouldShow = Math.floor(this.flashTimer / flashInterval) % 2 === 0;

      if (shouldShow) {
        super.draw();
      }
    } else {
      super.draw();
    }

    pop();
  }
}
