class Treasure extends Entity {
  constructor(worldX: number, worldY: number, image: p5.Image) {
    super(worldX, worldY, image);
  }

  public update() {}
  public onCollision(other: Entity): void {
    if (other instanceof Player) {
      new TreasureChoiceScene();
    }
  }
}
