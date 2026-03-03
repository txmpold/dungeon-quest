abstract class Entity {
  public worldX: number;
  public worldY: number;
  public zIndex: number;
  public speed: p5.Vector;
  public image: p5.Image;
  public hitBoxX = 0;
  public hitBoxY = 0;
  public hitBoxW = GamePanel.tileSize;
  public hitBoxH = GamePanel.tileSize;
  //animation
  protected row: number; // animationen
  protected col: number;
  protected totalCol: number;

  constructor(
    worldX: number,
    worldY: number,
    image: p5.Image,
    speed: p5.Vector = createVector(0, 0),
    //animation
    row: number = 0,
    col: number = 0,
    totalCol: number = 1,
    zIndex = 0,
  ) {
    this.worldX = worldX;
    this.worldY = worldY;
    this.speed = speed;
    this.image = image;
    this.row = row;
    this.col = col;
    this.totalCol = totalCol;
    this.zIndex = zIndex;
  }

  public setHitBox(
    hitBoxX = 0,
    hitBoxY = 0,
    hitBoxW = GamePanel.tileSize,
    hitBoxH = GamePanel.tileSize,
  ) {
    this.hitBoxX = hitBoxX;
    this.hitBoxY = hitBoxY;
    this.hitBoxW = hitBoxW;
    this.hitBoxH = hitBoxH;
  }

  public update(entities: Entity[]) {
    this.entityAnimation(entities);
  }

  protected entityAnimation(entities: Entity[]) {
    //deltaTime enheter per sekund
    // Flytta X
    this.worldX += this.speed.x * deltaTime;
    for (const obstacle of entities) {
      if (
        obstacle === this ||
        (this instanceof Projectile && obstacle instanceof Player) ||
        obstacle instanceof Projectile ||
        (this instanceof Player && obstacle instanceof Enemy) ||
        (this instanceof Enemy && obstacle instanceof Player)
      )
        continue;
      if (this.isCollidingWith(obstacle) && obstacle.isCollidingWith(this)) {
        this.worldX -= this.speed.x * deltaTime;
        this.onCollision(obstacle);
        break;
      }
    }

    // Flytta Y
    this.worldY += this.speed.y * deltaTime;
    for (const obstacle of entities) {
      if (
        obstacle === this ||
        (this instanceof Projectile && obstacle instanceof Player) ||
        obstacle instanceof Projectile ||
        (this instanceof Player && obstacle instanceof Enemy) ||
        (this instanceof Enemy && obstacle instanceof Player)
      )
        continue;

      if (this.isCollidingWith(obstacle) && obstacle.isCollidingWith(this)) {
        this.worldY -= this.speed.y * deltaTime;
        this.onCollision(obstacle);
        break;
      }
    }

    if (this.speed.x !== 0 || this.speed.y !== 0) {
      if (frameCount % 10 === 0) {
        this.col++;
        if (this.col >= this.totalCol) {
          this.col = 0;
        }
      }
    } else {
      this.col = 0;
    }

    /* for (const player of entities) {
      if (player instanceof Player && this.isCollidingWith(player)) {
        this.speed.set(4, 0);
      }
    } */
  }

  public draw() {
    push();
    image(
      this.image,
      this.worldX,
      this.worldY,
      GamePanel.tileSize,
      GamePanel.tileSize,
      this.col * GamePanel.originalTileSize,
      this.row * GamePanel.originalTileSize,
      GamePanel.originalTileSize,
      GamePanel.originalTileSize,
    );
    pop();
  }

  public isCollidingWith(other: Entity): boolean {
    return (
      this.worldX + this.hitBoxX <
        other.worldX + other.hitBoxX + other.hitBoxW &&
      this.worldX + this.hitBoxX + this.hitBoxW >
        other.worldX + other.hitBoxX &&
      this.worldY + this.hitBoxY <
        other.worldY + other.hitBoxY + other.hitBoxH &&
      this.worldY + this.hitBoxY + this.hitBoxH > other.worldY + other.hitBoxY
    );
  }

  public abstract onCollision(other: Entity): void;
}

// class MyMath {
//   public static random(): number {
//     return 0;
//   }
//   public static abs(value: number): number {
//     if (value < 0) return value * -1;
//     return value;
//   }
// }

// const math = new MyMath();
// math.random();

// MyMath.random();
// MyMath.abs(-24);
