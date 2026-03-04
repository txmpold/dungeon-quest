class TreasureChoiceScene extends Scene {
  private choice1: Button;
  private choice2: Button;

  constructor(choice1Imgage: p5.Image, choice2Image: p5.Image) {
    super("treasureChoiceScene");
    this.choice1 = new Button(
      null,
      () => {
        music.gameMusic.play();
        game.changeScene(
          new TransitionScene("Level 2", 2000, () => game.goToNextLevel()),
        );
      },
      createVector(200, 200),
      createVector(
        GamePanel.worldWidth / 2 - 250,
        GamePanel.worldHeight / 2 - 100,
      ),
      choice1Imgage,
    );
    this.choice2 = new Button(
      null,
      () => {
        music.gameMusic.play();
        game.changeScene(
          new TransitionScene("Level 2", 2000, () => game.goToNextLevel()),
        );
      },
      createVector(200, 200),
      createVector(
        GamePanel.worldWidth / 2 + 50,
        GamePanel.worldHeight / 2 - 100,
      ),
      choice2Image,
    );
    music.gameMusic.stop();
    cursor("assets/images/swordcursor.png");
    game.gameIsStarted = false;
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
}
