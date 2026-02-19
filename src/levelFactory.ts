class LevelFactory {
  public tiles: p5.Image[] = [];
  public x: number = 0;
  public y: number = 0;
  public levelOneGrid: number[][];
  /*   public collisionTiles: number[] = []; */

  constructor(
    tiles: p5.Image[],
    x: number,
    y: number,
    levelOneGrid: number[][],
  ) {
    this.tiles = tiles;
    this.x = x;
    this.y = y;
    this.levelOneGrid = levelOneGrid;
  }

  public draw() {}
}
