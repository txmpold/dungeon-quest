class Button {
  private label: string | null;
  private onClick: () => void;
  private buttonIsHovered: boolean = false;
  private wasHovering: boolean = false;
  private size: p5.Vector;
  private buttonPos: p5.Vector;
  private buttonImage: p5.Image | null;

  constructor(
    label: string | null,
    onClick: () => void,
    size: p5.Vector,
    buttonPos: p5.Vector,
    buttonImage: p5.Image | null = null,
  ) {
    this.label = label;
    this.onClick = onClick;
    this.size = createVector(size.x, size.y);
    this.buttonPos = createVector(buttonPos.x, buttonPos.y);
    this.buttonImage = buttonImage;
  }

  public update() {
    let hoveringNow =
      mouseX > this.buttonPos.x &&
      mouseX < this.buttonPos.x + this.size.x &&
      mouseY > this.buttonPos.y &&
      mouseY < this.buttonPos.y + this.size.y;

    if (hoveringNow && !this.wasHovering) {
      soundEffects.menuButtonSound.play();
    }

    this.buttonIsHovered = hoveringNow;
    this.wasHovering = hoveringNow;

    if (this.buttonIsHovered && mouseIsPressed) {
      this.onClick();
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
    if (this.label !== null) {
      text(
        this.label,
        this.buttonPos.x + this.size.x / 2 - textWidth(this.label) / 2,
        this.buttonPos.y + this.size.y / 2 - textSize() / 1.6,
      );
    }
    if (this.buttonImage !== null) {
      image(
        this.buttonImage,
        this.buttonPos.x + this.size.x / 2 - this.buttonImage.width / 2,
        this.buttonPos.y + this.size.y / 2 - this.buttonImage.height / 2,
      );
    }
    pop();
  }
}
