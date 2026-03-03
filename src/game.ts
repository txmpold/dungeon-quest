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
  }

  public draw() {
    background(0);
    if (this.gameIsStarted === true) {
      this.level.draw();
      if (!music.gameMusic.isPlaying()) {
        music.gameMusic.loop();
      }
    } else {
      music.gameMusic.stop();
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
