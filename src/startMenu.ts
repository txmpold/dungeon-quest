class StartMenu {
  public game: Game;
  public levelFactory: LevelFactory;
  public level: Level;
  private startButton: Button;
  private showControls: Button;

  constructor(game: Game) {
    this.game = game;
    this.startButton = new Button("Start Game", () => this.game.gameIsStarted = true, false, createVector(150, 50), createVector(100, 100), createVector(100, 100));
    this.showControls = new Button("Show Controls", () => this.drawControls(), false, createVector(150, 50), createVector(100, 200), createVector(100, 200));
    this.levelFactory = new LevelFactory(tiles, 0, 0);
    this.level = this.levelFactory.generateLevel(0);
  }

  public update() {
    this.startButton.update();
    this.showControls.update();
  }

  public draw() {
    push();
    this.startButton.draw();
    this.showControls.draw();
    pop();
  }
  public drawControls() {
      rect(50, 50, 300, 300);
  }
}
