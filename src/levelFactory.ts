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

  public draw(player: Player) {
    let worldCol = 0;
    let worldRow = 0;

    while (
      worldCol < GamePanel.maxWorldCol &&
      worldRow < GamePanel.maxWorldRow
    ) {
      let worldX = worldCol * GamePanel.tileSize;
      let worldY = worldRow * GamePanel.tileSize;
      let screenX = worldX - player.worldX + player.screenX;
      let screenY = worldY - player.worldY + player.screenY;

      if (
        worldX + GamePanel.tileSize > player.worldX - player.screenX &&
        worldX - GamePanel.tileSize < player.worldX + player.screenX &&
        worldY + GamePanel.tileSize > player.worldY - player.screenY &&
        worldY - GamePanel.tileSize < player.worldY + player.screenY
      )
        image(
          this.tiles[this.levelOneGrid[worldRow][worldCol]],
          screenX,
          screenY,
          GamePanel.tileSize,
          GamePanel.tileSize,
        );
      worldCol++;

      if (worldCol === GamePanel.maxWorldCol) {
        worldCol = 0;
        worldRow++;
      }
    }
  }
}
