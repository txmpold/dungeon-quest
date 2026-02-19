class Player extends Entity {
  constructor(gp: GamePanel) {
    const row = 0;
    const col = 0;
    const totalCol = 6;
    super(
      gp,
      createVector(100, 100),
      createVector(4, 4),
      images.character,
      row,
      col,
      totalCol,
    );
  }

  public update() {
    this.move();
    super.update();
  }

  public move() {
    this.speed.set(0, 0);

    this.row = 0;
    this.totalCol = 1;
    this.col = 0;

    if (keyIsDown(RIGHT_ARROW)) {
      this.speed.x = 2;
      this.row = 1;
      this.totalCol = 8;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.speed.x = -2;
      this.row = 5;
      this.totalCol = 8;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.speed.y = 2;
      this.row = 3;
      this.totalCol = 4;
    }
    if (keyIsDown(UP_ARROW)) {
      this.speed.y = -2;
      this.row = 2;
      this.totalCol = 4;
    }
  }

  public playerAttack() {}
}
