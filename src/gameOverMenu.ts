/// <reference path="scene.ts" />

class GameOverMenu extends Scene {
  private restartButton: Button;
  private mainMenuButton: Button;

  constructor() {
    super("gameOverMenu");
    this.restartButton = new Button(
      "Retry",
      () => {
        music.gameMusic.loop();
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
    this.mainMenuButton = new Button(
      "Main Menu",
      () => game.changeScene(new StartMenu()),
      createVector(200, 60),
      createVector(
        GamePanel.worldWidth / 2 - 100,
        GamePanel.worldHeight / 2 + 110,
      ),
    );
    music.gameOverMusic.play();
    cursor("assets/images/swordcursor.png");
  }

  public update() {
    this.restartButton.update();
    this.mainMenuButton.update();
  }

  public draw() {
    image(
      images.menuImages.gameOver,
      GamePanel.worldWidth / 2 - 100,
      GamePanel.worldHeight / 2 - 180,
      200,
      200,
    );
    this.restartButton.draw();
    this.mainMenuButton.draw();
  }
}
