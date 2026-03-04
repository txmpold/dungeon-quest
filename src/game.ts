class Game {
  public levelFactory: LevelFactory;
  public level: Level;
  private currentScene: Scene;
  public gameIsStarted: boolean = false;

  constructor() {
    this.levelFactory = new LevelFactory(tiles, 0, 0);
    this.level = new Level([]);
    this.currentScene = new StartMenu();
  }

  public changeScene(scene: Scene) {
    this.currentScene = scene;
  }

  public startGame() {
    this.gameIsStarted = true;
    this.level = this.levelFactory.generateLevel(1);
    if (!music.gameMusic.isPlaying()) {
      music.gameMusic.loop();
    }
  }

  public goToNextLevel() {
    if (this.levelFactory.currentLevel === 0) {
      this.level = this.levelFactory.generateLevel(
        this.levelFactory.currentLevel + 1,
      );
      this.gameIsStarted = true;
    } else if (this.levelFactory.currentLevel === 1) {
      this.level = this.levelFactory.generateLevel(
        this.levelFactory.currentLevel + 1,
      );
      this.gameIsStarted = true;
    } else if (this.levelFactory.currentLevel === 2) {
      this.level = this.levelFactory.generateLevel(
        this.levelFactory.currentLevel + 1,
      );
      this.gameIsStarted = true;
    } else if (this.levelFactory.currentLevel === 3) {
      this.gameIsStarted = false;
      //spelet är slut
    }
  }

  public draw() {
    background(0);

    if (
      (this.currentScene instanceof TransitionScene &&
        this.currentScene.transitionActive) ||
      this.currentScene instanceof TreasureChoiceScene ||
      this.currentScene instanceof GameOverMenu ||
      this.currentScene instanceof StartMenu
    ) {
      this.currentScene.draw();
    } else if (this.gameIsStarted === true) {
      this.level.draw();
    }
  }

  public update() {
    if (this.gameIsStarted === true) {
      this.level.update();
      this.level.entities = this.level.entities.filter(
        (entity) =>
          (!(entity instanceof Projectile) || !entity.isRemoved) &&
          (!(entity instanceof Enemy) || !entity.isKilled) &&
          (!(entity instanceof Treasure) || !entity.isUnlocked),
      );
    } else {
      this.currentScene.update();
    }
  }
}
