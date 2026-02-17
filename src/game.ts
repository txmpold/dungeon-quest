/// <reference path="./levelMaps/josefineLevel.ts" />

class Game {
  private levelData: any;
  private tileSize: number = 16;
  private mapImage: p5.Image;
  private tileColumns: number = 8;

  constructor() {
    console.log("Game skapas");
    this.levelData = josefineLevel;
    this.mapImage = mapImage;
  }

  public update() {}

  public draw() {
    background(0);

    const mapWidth = this.mapImage.width;
    const mapHeight = this.mapImage.height;

    const x = width / 2 - mapWidth / 2;
    const y = height / 2 - mapHeight / 2;
    image(this.mapImage, x, y);
  }
}
