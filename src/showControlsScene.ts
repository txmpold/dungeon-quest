/// <reference path="scene.ts" />

class ShowControls extends Scene {
  private closeControls: Button;

  constructor() {
    console.log("ShowControls constructor called");
    super("showControls");
    this.closeControls = new Button(
      "Close",
      () => game.changeScene(new StartMenu()),
      createVector(200, 60),
      createVector(
        GamePanel.worldWidth / 2 - 100,
        GamePanel.worldHeight / 2 + 170,
      ),
    );
  }

  public update() {
    this.closeControls.update();
  }

  public draw() {
    push();
    image(
      images.menuImages.background,
      0,
      0,
      GamePanel.screenWidth,
      GamePanel.screenHeight,
    );
    image(
      images.menuImages.controlsbg,
      GamePanel.worldWidth / 2 - GamePanel.worldWidth / 2 + 100,
      GamePanel.worldHeight / 2 - GamePanel.worldHeight / 2 + 50,
      GamePanel.worldWidth - 200,
      GamePanel.worldHeight - 200,
    );
    fill("black");
    textFont(fonts.font);
    textSize(18);
    textAlign(LEFT, TOP);
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
    this.closeControls.draw();
    pop();
  }
}
