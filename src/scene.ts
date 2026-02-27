class Scene {
  private game: Game;
  private type: string;

  constructor(game: Game, type: string) {
    this.game = game;
    this.type = type;
  }

  update() {}

  draw() {
    if (this.type === "startMenu") {
      let startMenu = new StartMenu();
      startMenu.update();
      startMenu.draw();
    }
  }
}
