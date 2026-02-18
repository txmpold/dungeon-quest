class Entity {
  protected position: p5.Vector;
  protected velocity: p5.Vector;
  protected size: number; //vector kanske?
  private image: p5.Image;
  protected row: number = 6;

  private col: number = 0;
  private frameSize: number = 16;
  protected totalCol: number = 1;

  constructor(image: p5.Image) {
    this.position = createVector(width * 0.5, height * 0.5);
    this.velocity = createVector(0, 0);
    this.size = 64;
    this.image = image;
  }

  public update() {
    this.position.add(this.velocity);
    this.updatePosition();
  }

  private updatePosition() {
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
