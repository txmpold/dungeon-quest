abstract class Entity {
  public worldX: number;
  public worldY: number;
  public zIndex: number;
  public speed: p5.Vector;
  public image: p5.Image;
  public solidAreaX = 0;
  public solidAreaY = 0;
  public solidAreaW = GamePanel.tileSize;
  public solidAreaH = GamePanel.tileSize;
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

  public update() {
    this.entityAnimation();
  }

  protected entityAnimation() {
    //deltaTime enheter per sekund
    this.worldX += this.speed.x * deltaTime;
    this.worldY += this.speed.y * deltaTime;

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
      this.worldX + this.solidAreaX <
        other.worldX + other.solidAreaX + other.solidAreaW &&
      this.worldX + this.solidAreaW + this.solidAreaW >
        other.worldX + other.solidAreaX &&
      this.worldY + this.solidAreaY <
        other.worldY + other.solidAreaY + other.solidAreaH &&
      this.worldY + this.solidAreaH + this.solidAreaH >
        other.worldY + other.solidAreaY
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
