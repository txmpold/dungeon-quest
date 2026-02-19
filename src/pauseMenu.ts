class pauseMenu {
  private game: Game;
  private showControls: boolean;

  constructor(game: Game, showControls: boolean) {
    this.game = game;
    this.showControls = showControls;
  }
  public update() {}
  public draw() {}
  public drawControls() {}
  public startGame() {}
}
