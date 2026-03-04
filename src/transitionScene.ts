/// <reference path="scene.ts" />

class TransitionScene extends Scene {
  private transitionText: string;
  private transitionDuration: number;
  private elapsedTime: number = 0;
  private onTransitionComplete: () => void;
  public transitionActive: boolean;

  constructor(
    transitionText: string,
    transitionDuration: number,
    onTransitionComplete: () => void,
  ) {
    super("transitionScene");
    this.transitionText = transitionText;
    this.transitionDuration = transitionDuration;
    this.onTransitionComplete = onTransitionComplete;
    this.transitionActive = true;
  }

  public update() {
    if (!this.transitionActive) return;
    this.elapsedTime += deltaTime;
    if (this.elapsedTime >= this.transitionDuration) {
      this.transitionActive = false;
      this.onTransitionComplete();
    }
  }

  public draw() {
    fill(0);
    rect(0, 0, GamePanel.screenWidth, GamePanel.screenHeight);
    textFont(fonts.font);
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text(
      this.transitionText,
      GamePanel.worldWidth / 2,
      GamePanel.worldHeight / 2,
    );
  }
}
