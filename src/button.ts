class Button {
  private label: string;
  private onClick: () => void;
  private buttonIsHovered: boolean = false;
  private size: p5.Vector;
  private buttonPos: p5.Vector;

  constructor(
    label: string,
    onClick: () => void,
    size: p5.Vector,
    buttonPos: p5.Vector,
  ) {
    this.label = label;
    this.onClick = onClick;
    this.size = createVector(size.x, size.y);
    this.buttonPos = createVector(buttonPos.x, buttonPos.y);
  }

  public update() {
    this.buttonIsHovered = false;
    if (
      mouseX > this.buttonPos.x &&
      mouseX < this.buttonPos.x + this.size.x &&
      mouseY > this.buttonPos.y &&
      mouseY < this.buttonPos.y + this.size.y
    ) {
      this.buttonIsHovered = true;
      if (mouseIsPressed) {
        this.onClick();
      }
    }
  }

  public draw() {
    push();
    fill("black");
    if (this.buttonIsHovered) {
      fill("white");
    }
    image(
      images.menuImages.button,
      this.buttonPos.x,
      this.buttonPos.y,
      this.size.x,
      this.size.y,
    );
    textFont(fonts.font);
    textSize(15);
    textAlign(LEFT, TOP);
    text(
      this.label,
      this.buttonPos.x + this.size.x / 2 - textWidth(this.label) / 2,
      this.buttonPos.y + this.size.y / 2 - textSize() / 1.6,
    );
    pop();
  }
}
