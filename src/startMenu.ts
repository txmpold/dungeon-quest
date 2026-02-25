class StartMenu {
  public game: Game;
  public levelFactory: LevelFactory;
  public level: Level;
  private gameLogo: p5.Image;
  private startButton: Button;
  private showControls: Button;
  
  constructor(game: Game) {
    this.game = game;
    this.gameLogo = images.menuImages.logo;
    this.startButton = new Button("Start Game", () => this.game.startGame(), false, createVector(200, 60), createVector(GamePanel.worldWidth / 2 - 100, GamePanel.worldHeight / 2 - 30));
    this.showControls = new Button("Controls", () => this.drawControls(), false, createVector(200, 60), createVector(GamePanel.worldWidth / 2 - 100, GamePanel.worldHeight / 2 + 40));
    this.levelFactory = new LevelFactory(tiles, 0, 0);
    this.level = this.levelFactory.generateLevel(0);
  }
  
  public update() {
    this.startButton.update();
    this.showControls.update();
  }
  
  public draw() {
    image(images.menuImages.background, 0, 0, GamePanel.screenWidth, GamePanel.screenHeight)
    image(this.gameLogo, GamePanel.worldWidth / 2 - 150 , 60, 300, 145)
    push();
    this.startButton.draw();
    this.showControls.draw();
    pop();
  }
  public drawControls() {
      rect(50, 50, 300, 300);
  }
}
