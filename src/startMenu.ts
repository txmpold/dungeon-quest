/// <reference path="scene.ts" />

class StartMenu extends Scene {
  private startButton: Button;
  private showControls: Button;
  private sceneStartTime: number = 0;
  private interactionDelay: number = 500;

  constructor() {
    super("startMenu");
    this.sceneStartTime = millis();
    this.startButton = new Button(
      "Start Game",
      () => {
        noCursor();
        music.gameMusic.loop();
        if (game.playerHealth.length === 0) {
          game.playerHealth.push("hp", "hp", "hp", "hp", "hp");
        }
        game.changeScene(
          new TransitionScene("Level 1", 2000, () => game.startGame()),
        );
      },
      createVector(200, 60),
      createVector(
        GamePanel.worldWidth / 2 - 100,
        GamePanel.worldHeight / 2 + 40,
      ),
    );
    this.showControls = new Button(
      "Controls",
      () => game.changeScene(new ShowControlsScene()),
      createVector(200, 60),
      createVector(
        GamePanel.worldWidth / 2 - 100,
        GamePanel.worldHeight / 2 + 110,
      ),
    );
    cursor("assets/images/swordcursor.png");
  }

  public update() {
    this.startButton.update();
    this.showControls.update();
    const currentTime = millis();
    const timeSinceSceneStart = currentTime - this.sceneStartTime;
    if (timeSinceSceneStart > this.interactionDelay) {
      this.startButton.update();
      this.showControls.update();
    }
  }

  public draw() {
    image(
      images.menuImages.background,
      0,
      0,
      GamePanel.screenWidth,
      GamePanel.screenHeight,
    );
    image(images.menuImages.logo, GamePanel.worldWidth / 2 - 175, 50, 350, 250;
    this.startButton.draw();
    this.showControls.draw();
  }
}
