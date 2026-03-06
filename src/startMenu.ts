/// <reference path="scene.ts" />

class StartMenu extends Scene {
  private startButton: Button;
  private showControls: Button;

  constructor() {
    super("startMenu");
    this.startButton = new Button(
      "Start Game",
      () => {
        noCursor();
        music.gameMusic.loop();
        game.changeScene(
          new TransitionScene("Level 1", 2000, () => game.startGame()),
        );
      },
      createVector(200, 60),
      createVector(
        GamePanel.worldWidth / 2 - 100,
        GamePanel.worldHeight / 2 - 30,
      ),
    );
    this.showControls = new Button(
      "Controls",
      () => game.changeScene(new ShowControlsScene()),
      createVector(200, 60),
      createVector(
        GamePanel.worldWidth / 2 - 100,
        GamePanel.worldHeight / 2 + 40,
      ),
    );
    cursor("assets/images/swordcursor.png");
  }

  public update() {
    this.startButton.update();
    this.showControls.update();
  }

  public draw() {
    image(
      images.menuImages.background,
      0,
      0,
      GamePanel.screenWidth,
      GamePanel.screenHeight,
    );
    image(images.menuImages.logo, GamePanel.worldWidth / 2 - 150, 60, 300, 145);
    this.startButton.draw();
    this.showControls.draw();
  }
}
