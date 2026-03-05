class TreasureChoiceScene extends Scene {
  private choice1: Button;
  private choice2: Button;

  constructor(choice1Image: p5.Image) {
    super("treasureChoiceScene");
    this.choice1 = new Button(
      null,
      () => {
        music.menuMusic.stop();
        music.gameMusic.play();
        music.gameMusic.loop();
        noCursor();
        if (choice1Image === images.treasureChoices.boots) {
          soundEffects.boots.play();
          game.playerinventory.push(images.treasureChoices.boots);
        } else if (choice1Image === images.treasureChoices.fireball) {
          soundEffects.fireball.play();
          game.playerinventory.push(images.treasureChoices.fireball);
        }
        game.changeScene(
          new TransitionScene(
            "Level " + (game.levelFactory.currentLevel + 1),
            2000,
            () => game.goToNextLevel(),
          ),
        );
      },
      createVector(200, 200),
      createVector(
        GamePanel.worldWidth / 2 - 250,
        GamePanel.worldHeight / 2 - 100,
      ),
      choice1Image,
    );
    this.choice2 = new Button(
      null,
      () => {
        music.menuMusic.stop();
        soundEffects.heal.play();
        music.gameMusic.play();
        music.gameMusic.loop();
        game.playerHealth.push("hp", "hp", "hp");
        noCursor();
        game.changeScene(
          new TransitionScene(
            "Level " + (game.levelFactory.currentLevel + 1),
            2000,
            () => game.goToNextLevel(),
          ),
        );
      },
      createVector(200, 200),
      createVector(
        GamePanel.worldWidth / 2 + 50,
        GamePanel.worldHeight / 2 - 100,
      ),
      images.treasureChoices.heal,
    );
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
