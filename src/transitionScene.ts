/// <reference path="scene.ts" />

class TransitionScene extends Scene {
  private transitionText: string;
  private transitionDuration: number;
  private elapsedTime: number = 0;
  private onTransitionComplete: () => void;

  constructor(
    transitionText: string,
    transitionDuration: number,
    onTransitionComplete: () => void,
  ) {
    super("transitionScene");
    this.transitionText = transitionText;
    this.transitionDuration = transitionDuration;
    this.onTransitionComplete = onTransitionComplete;
  }

  public update() {
    this.elapsedTime += deltaTime;
    if (this.elapsedTime >= this.transitionDuration) {
      this.onTransitionComplete();
    }
  }

  public draw() {
    const alpha = map(this.elapsedTime, 0, this.transitionDuration, 255, 0);
    fill(0, alpha);
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
