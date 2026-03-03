class TreasureChoiceScene extends Scene {
  private choice1: Button;
  private choice2: Button;

  constructor() {
    super("treasureChoiceScene");
    this.choice1 = new Button(
      " ", push(fireball?), createVector(200, 200), createVector(GamePanel.worldWidth / 2 - 200, GamePanel.worldHeight / 2 - 200));
    this.choice2 = new Button(
      " ", push(heart?), createVector(200, 200), createVector(GamePanel.worldWidth / 2 + 200, GamePanel.worldHeight / 2 - 200));
  }

  public update() {
    this.choice1.update();
    this.choice2.update();
  }

  public draw() {
    background(0);
    this.choice1.draw();
    this.choice2.draw();
  }