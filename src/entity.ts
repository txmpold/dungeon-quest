class Entity {
  protected position: p5.Vector;
  protected velocity: p5.Vector;
  protected size: number; //vector kanske?
  private image: p5.Image;
  protected frameSize: number = 16;

  protected row: number; //antal rader character.png?
  protected col: number;
  protected totalCol: number;

  constructor(
    position: p5.Vector,
    velocity: p5.Vector,
    image: p5.Image,
    row: number,
    col: number,
    totalCol: number,
  ) {
    this.position = position;
    this.velocity = velocity;
    this.image = image;
    this.row = row;
    this.col = col;
    this.totalCol = totalCol;
    this.size = 16;
  }

  public update() {
    this.entityAnimation();
  }

  protected entityAnimation() {
    this.position.add(this.velocity);

    if (frameCount % 10 === 0) {
      this.col++;
      if (this.col >= this.totalCol) {
        this.col = 0;
      }
    }
  }

  public draw() {
    push();
    // scale(1, -1)
    image(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size,
      this.col * this.frameSize,
      this.row * this.frameSize,
      this.frameSize,
      this.frameSize,
    );
    pop();
  }
}
