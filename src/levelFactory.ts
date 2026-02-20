class LevelFactory {
  public tiles: p5.Image[] = [];
  public x: number = 0;
  public y: number = 0;
  public levelOneGrid: number[][];
  /*   public collisionTiles: number[] = []; */

  constructor(tiles: p5.Image[], x: number, y: number) {
    this.tiles = tiles;
    this.x = x;
    this.y = y;
    this.levelOneGrid = loadMap(levels[1]);
  }

  public generateLevel(levelIndex: number[][]): Level {
    let entities: Entity[] = [];
    let worldCol = 0;
    let worldRow = 0;
    const level = new Level(entities);
    const player = level.entities.find((e) => e instanceof Player) as Player;
    const levelGrid = loadMap(levels[levelIndex[worldRow][worldCol]]);
    // 1. Loopa över gridden och skapa entiteterna
    // 2. Skapa level och skicka in entiteterna

    while (
      worldCol < GamePanel.maxWorldCol &&
      worldRow < GamePanel.maxWorldRow
    ) {
      let worldX = worldCol * GamePanel.tileSize;
      let worldY = worldRow * GamePanel.tileSize;

      if (
        worldX + GamePanel.tileSize > player.worldX - player.screenX &&
        worldX - GamePanel.tileSize < player.worldX + player.screenX &&
        worldY + GamePanel.tileSize > player.worldY - player.screenY &&
        worldY - GamePanel.tileSize < player.worldY + player.screenY
      )
        /* image(
          this.tiles[this.levelOneGrid[worldRow][worldCol]],
          screenX,
          screenY,
          GamePanel.tileSize,
          GamePanel.tileSize,
        ); */
        worldCol++;

      if (worldCol === GamePanel.maxWorldCol) {
        worldCol = 0;
        worldRow++;
      }
    }

    return level;
  }
}
function loadMap(newMap: string[]): number[][] {
  return newMap.map((line) =>
    line
      .trim()
      .split(/\s+/)
      .map((value) => Number(value)),
  );
}
