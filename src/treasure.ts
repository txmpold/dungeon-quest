class Treasure extends Entity {
  private size: number;

  constructor(worldX: number, worldY: number, image: p5.Image) {
    super(worldX, worldY, image, createVector(0, 0), 0, 0, 1);
    this.size = GamePanel.tileSize;
  }

  public update() {}
  public push() {}
  private checkForMonsters() {}

  public onCollision() {
    this.collisionOn = true;
  }
}
