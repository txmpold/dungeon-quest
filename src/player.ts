/// <reference path="entity.ts" />
class Player extends Entity {
  constructor() {
    const position = createVector(width * 0.5, height * 0.5);
    const velocity = createVector(0, 0);
    const row = 0;
    const col = 0;
    const totalCol = 6;
    super(position, velocity, images.character, row, col, totalCol);
  }

  public update() {
    this.move();
    super.update();
  }

  public move() {
    this.velocity.set(0, 0);
    this.row = 0;
    this.totalCol = 5;

    if (keyIsDown(RIGHT_ARROW)) {
      this.velocity.x = 2;
      this.row = 1;
      this.totalCol = 8;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.velocity.x = -2;
      this.row = 5;
      this.totalCol = 8;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.velocity.y = 2;
      this.row = 3;
      this.totalCol = 4;
    }
    if (keyIsDown(UP_ARROW)) {
      this.velocity.y = -2;
      this.row = 2;
      this.totalCol = 4;
    }
  }

  public playerAttack() {}
}
