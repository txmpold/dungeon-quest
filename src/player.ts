class Player extends Entity {
  public screenX: number;
  public screenY: number;

  constructor(gp: GamePanel) {
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
    this.screenX = GamePanel.screenWidth / 2 - GamePanel.tileSize / 2;
    this.screenY = GamePanel.screenHeight / 2 - GamePanel.tileSize / 2;
  }

  public update() {
    this.move();
    super.update();
  }

  public move() {
    this.speed.set(0, 0);
    this.row = 0;
    this.totalCol = 4;

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
      this.totalCol = 4;
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

  public playerAttack() {}
}
