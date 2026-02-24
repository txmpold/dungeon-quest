class StartMenu {
  private game: Game;
  private startButton: Button;
  private showControls: Button;

  constructor(game: Game) {
    this.game = game;
    this.startButton = new Button("Start Game", () => this.startGame(), createVector(150, 50), createVector(100, 100), createVector(100, 100));
    this.showControls = new Button("Show Controls", () => this.drawControls(), createVector(150, 50), createVector(100, 200), createVector(100, 200));
  }



  public update() {}
  public draw() {
    this.startButton.draw();
    this.showControls.draw();
  }
  public drawControls() {}
  public startGame() {}
}
