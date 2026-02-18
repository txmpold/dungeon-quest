class Entity {
  private position: p5.Vector;
  private velocity: p5.Vector;
  private size: number; //vector kanske?
  private image: p5.Image;

  constructor() {
    this.position = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.size = 16;
    this.image = images.tile;
  }

  public update() {}
  public draw() {
    push();
    image(this.image, this.position.x, this.position.y, this.size, this.size);
    pop();
  }
}
