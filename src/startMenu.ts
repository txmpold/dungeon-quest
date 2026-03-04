/// <reference path="scene.ts" />

class StartMenu extends Scene {
  private startButton: Button;
  private showControls: Button;
  private closeControls: Button;
  private controlsOnScreen: boolean = false;

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
      () => (this.controlsOnScreen = true),
      createVector(200, 60),
      createVector(
        GamePanel.worldWidth / 2 - 100,
        GamePanel.worldHeight / 2 + 40,
      ),
    );
    this.closeControls = new Button(
      "Close",
      () => (this.controlsOnScreen = false),
      createVector(200, 60),
      createVector(
        GamePanel.worldWidth / 2 - 100,
        GamePanel.worldHeight / 2 + 170,
      ),
    );
    this.controlsOnScreen = this.controlsOnScreen;
    cursor("assets/images/swordcursor.png");
  }

  public update() {
    this.startButton.update();
    this.showControls.update();
    if (this.controlsOnScreen === true) {
      this.closeControls.update();
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
    image(images.menuImages.logo, GamePanel.worldWidth / 2 - 150, 60, 300, 145);
    if (this.controlsOnScreen === true) {
      this.drawControls();
      this.closeControls.draw();
    } else {
      this.startButton.draw();
      this.showControls.draw();
    }
  }

  public drawControls() {
    image(
      images.menuImages.controlsbg,
      GamePanel.worldWidth / 2 - GamePanel.worldWidth / 2 + 100,
      GamePanel.worldHeight / 2 - GamePanel.worldHeight / 2 + 50,
      GamePanel.worldWidth - 200,
      GamePanel.worldHeight - 200,
    );
    textFont(fonts.font);
    textSize(18);
    text("Use the arrow keys to move around", 300, 140);
    image(
      images.menuImages.arrowkeys,
      GamePanel.worldWidth / 2 - 220,
      GamePanel.worldHeight / 2 - GamePanel.worldHeight / 2 + 120,
      150,
      100,
    );
    text("Use spacebar to attack", 180, 280);
    image(
      images.menuImages.spacebar,
      GamePanel.worldWidth / 2 - 70,
      GamePanel.worldHeight / 2 - GamePanel.worldHeight / 2 + 310,
      300,
      45,
    );
  }
}
