/// <reference path="scene.ts" />

class VictoryScene extends Scene {
  private restartButton: Button;
  private mainMenuButton: Button;

  constructor() {
    super("VictoryScene");
    this.restartButton = new Button(
      "Retry",
      () => {
        game.playerinventory = []; // Clear inventory
        game.playerHealth.push("hp", "hp", "hp", "hp", "hp");
        noCursor();
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
      () => {
        game.playerinventory = []; // Clear inventory
        game.changeScene(new StartMenu());
      },
      createVector(200, 60),
      createVector(
        GamePanel.worldWidth / 2 - 100,
        GamePanel.worldHeight / 2 + 110,
      ),
    );
    music.victoryMusic.play();
    cursor("assets/images/swordcursor.png");
    game.gameIsStarted = false;
    music.gameMusic.stop();
    music.menuMusic.stop();
  }

  public update() {
    this.restartButton.update();
    this.mainMenuButton.update();
  }

  public draw() {
    background(0);
    image(
      images.menuImages.victory,
      GamePanel.worldWidth / 2 - 100,
      GamePanel.worldHeight / 2 - 180,
      200,
      200,
    );
    this.restartButton.draw();
    this.mainMenuButton.draw();
  }
}
