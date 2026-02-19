class Entity {
  public gp: GamePanel;
  public worldX: number;
  public worldY: number;
  public speed: p5.Vector;
  public image: p5.Image;
  public collisionOn: boolean = false;

  //animation
  protected row: number; // antal rader character.png?
  protected col: number;
  protected totalCol: number;

  constructor(
    gp: GamePanel,
    worldX: number,
    worldY: number,
    speed: p5.Vector,
    image: p5.Image,
    //animation
    row: number,
    col: number,
    totalCol: number,
  ) {
    this.gp = gp;
    this.worldX = worldX;
    this.worldY = worldY;
    this.speed = speed;
    this.image = image;
    this.row = row;
    this.col = col;
    this.totalCol = totalCol;
  }

  public update() {
    this.entityAnimation();
  }

  protected entityAnimation() {
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
    if (this.image) {
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
    }
    pop();
  }
}
