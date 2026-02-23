class LevelFactory {
  public tiles: p5.Image[] = [];
  public x: number = 0;
  public y: number = 0;
  public collisionTiles: number[] = [];

  constructor(
    tiles: p5.Image[],
    x: number,
    y: number,
    collisionTiles: number[] = [],
  ) {
    this.tiles = tiles;
    this.x = x;
    this.y = y;
    this.collisionTiles = collisionTiles;
  }

  public generateLevel(index: number): Level {
    let entities: Entity[] = [];
    let worldCol = 0;
    let worldRow = 0;
    let player: Player | undefined;
    const level = new Level(entities);
    const levelGrid = this.loadMap(levels[index]);

    while (worldCol < levelGrid[0].length && worldRow < levelGrid.length) {
      let worldX = worldCol * GamePanel.tileSize;
      let worldY = worldRow * GamePanel.tileSize;

      const entityNumber = levelGrid[worldRow][worldCol];
      if (entityNumber === ".") {
        entities.push(new Floor(worldX, worldY));
      }
      if (entityNumber === "2") {
        entities.push(new Obstacle(worldX, worldY, images.tiles.wall));
      }
      if (entityNumber === "W") {
        entities.push(new Obstacle(worldX, worldY, images.tiles.water));
      }
      if (entityNumber === "5") {
        entities.push(new Obstacle(worldX, worldY, images.tiles.wallTop));
      }
      if (entityNumber === "4") {
        entities.push(new Floor(worldX, worldY));
        player = new Player(gp, worldX, worldY, 5, level);
      }
      if (entityNumber === "6") {
        entities.push(new Obstacle(worldX, worldY, images.tiles.wallDown));
      }
      if (entityNumber === "7") {
        entities.push(new Obstacle(worldX, worldY, images.tiles.wallLeft));
      }
      if (entityNumber === "8") {
        entities.push(new Obstacle(worldX, worldY, images.tiles.wallRight));
      }
      if (entityNumber === "A") {
        entities.push(
          new Obstacle(worldX, worldY, images.tiles.wallTopLeftCorner),
        );
      }
      if (entityNumber === "B") {
        entities.push(
          new Obstacle(worldX, worldY, images.tiles.wallTopRightCorner),
        );
      }
      if (entityNumber === "C") {
        entities.push(
          new Obstacle(worldX, worldY, images.tiles.wallDownLeftCorner),
        );
      }
      if (entityNumber === "D") {
        entities.push(
          new Obstacle(worldX, worldY, images.tiles.wallDownRightCorner),
        );
      }

      worldCol++;

      if (worldCol === levelGrid[0].length) {
        worldCol = 0;
        worldRow++;
      }
    }

    if (!player) {
      throw new Error("Missing player in data");
    }
    entities.push(player);

    return level;
  }

  private loadMap(newMap: string[]): string[][] {
    return newMap.map(
      (line) => line.trim().split(/\s+/),
      // .map((value) => value)),
    );
  }

  public isTileSolid(tileNum: number): boolean {
    return this.collisionTiles.indexOf(tileNum) !== -1;
  }
}
