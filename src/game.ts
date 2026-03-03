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
    this.levelFactory.currentLevel = 1;
    if (!music.gameMusic.isPlaying()) {
      music.gameMusic.loop();
    }
  }

  public goToNextLevel() {
    this.levelFactory.currentLevel++;

    switch (this.levelFactory.currentLevel) {
      case 1:
        this.levelFactory.currentLevel = 2;
        this.level = this.levelFactory.generateLevel(2);
        break;
      case 2:
        this.levelFactory.currentLevel = 3;
        this.level = this.levelFactory.generateLevel(3);
        break;
      case 3:
        this.levelFactory.currentLevel = 4;
        new EndScreen(); // skapa en endscreen
        break;
      default:
        console.log("No more levels available");
    }
  }

  public draw() {
    background(0);
    if (this.gameIsStarted === true) {
      this.level.draw();
    } else {
      this.currentScene.draw();
    }
  }

  public update() {
    if (this.gameIsStarted === true) {
      this.level.update();
      this.level.entities = this.level.entities.filter(
        (entity) =>
          (!(entity instanceof Projectile) || !entity.isRemoved) &&
          (!(entity instanceof Enemy) || !entity.isKilled),
      );
    } else {
      this.currentScene.update();
    }
  }
}
