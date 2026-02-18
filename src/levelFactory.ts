/// <reference path="./levelMaps/josefineLevel.ts" />

class LevelFactory {
  private levelData: any;
  private mapImage: p5.Image;
  // private tileSize: number = 16;
  // private tileColumns: number = 8;

  constructor() {
    this.levelData = josefineLevel;
    this.mapImage = images.map;
  }

  public update() {}

  public draw() {
    background(0);

    const mapWidth = this.mapImage.width;
    const mapHeight = this.mapImage.height;

    const x = width / 2 - mapWidth / 2;
    const y = height / 2 - mapHeight / 2;
    image(this.mapImage, 0, 0);
  }
}
