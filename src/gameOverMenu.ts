/// <reference path="scene.ts" />

class GameOverMenu extends Scene {
  public levelFactory: LevelFactory;
  public level: Level;
  private restartButton: Button;
  private mainMenuButton: Button;

  constructor() {
    super("gameOverMenu");
    this.levelFactory = new LevelFactory(tiles, 0, 0);
    this.level = this.levelFactory.generateLevel(0);
    this.restartButton = new Button(
      "Restart",
      () => game.startGame(),
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
    music.menuMusic.stop();
    music.gameOverMusic.play();
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
