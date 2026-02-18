/// <reference path="entity.ts" />
class Enemy extends Entity {
  protected row: number; //antal rader character.png?

  protected col: number;
  protected totalCol: number;
  constructor() {
    const position = createVector(0, 0);
    const velocity = createVector(0, 0);

    const row = 0;
    const col = 0;
    const totalCol = 8;
    super(position, velocity, images.slime, row, col, totalCol);
  }

  public update() {
    this.updatePosition();
  }

  protected updatePosition() {
    this.position.add(this.velocity);

    if (frameCount % 10 === 0) {
      this.col++;
      if (this.col >= this.totalCol) {
        this.col = 0;
      }
    }
  }
  public move() {
    this.velocity.set(random(width), random(height));
    this.row = 0;
    // this.totalCol = 3;
  }
}
