class startMenu {
  private game: Game;
  private showControls: boolean;

  constructor(game: Game, showControls: boolean) {
    this.game = new Game();
    this.showControls = showControls;
  }
  public update() {}
  public draw() {}
  public drawControls() {}
  public startGame() {}
}
