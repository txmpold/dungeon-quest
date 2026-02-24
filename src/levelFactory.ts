class LevelFactory {
  public tiles: p5.Image[] = [];
  public x: number = 0;
  public y: number = 0;
  /*   public collisionTiles: number[] = []; */

  constructor(tiles: p5.Image[], x: number, y: number) {
    this.tiles = tiles;
    this.x = x;
    this.y = y;
  }

  public generateLevel(index: number): Level {
    let entities: Entity[] = [];
    let worldCol = 0;
    let worldRow = 0;
    let player: Player | undefined;
    const level = new Level(entities);
    /* const player = level.entities.find((e) => e instanceof Player) as Player; */
    const levelGrid = this.loadMap(levels[index]);

    while (worldCol < levelGrid[0].length && worldRow < levelGrid.length) {
      let worldX = worldCol * GamePanel.tileSize;
      let worldY = worldRow * GamePanel.tileSize;

      const entityNumber = levelGrid[worldRow][worldCol];

      switch (entityNumber) {
        case ".":
          entities.push(new Floor(worldX, worldY));
          break;

        case "W":
          entities.push(new Obstacle(worldX, worldY, images.tiles.water));
          break;

        case "g":
          entities.push(new Floor(worldX, worldY));
          entities.push(new Obstacle(worldX, worldY, images.tiles.ghost));
          break;

        case "b":
          entities.push(new Floor(worldX, worldY));
          entities.push(new Obstacle(worldX, worldY, images.tiles.barrel));
          break;
          
        case "x":
          entities.push(new Floor(worldX, worldY));
          entities.push(new Obstacle(worldX, worldY, images.tiles.box1));
          break;

        case "t":
          entities.push(new Floor(worldX, worldY));
          entities.push(new Obstacle(worldX, worldY, images.tiles.treasure));
          break;

        case "c":
          entities.push(new Floor(worldX, worldY));
          entities.push(new Obstacle(worldX, worldY, images.tiles.candelabra));
          break;

        case "2":
          entities.push(new Obstacle(worldX, worldY, images.tiles.wall));
          break;

        case "4":
          entities.push(new Floor(worldX, worldY));
          player = new Player(worldX, worldY, 5, level);
          break;

        case "5":
          entities.push(new Obstacle(worldX, worldY, images.tiles.wallTop));
          break;

        case "6":
          entities.push(new Obstacle(worldX, worldY, images.tiles.wallDown));
          break;

        case "7":
          entities.push(new Obstacle(worldX, worldY, images.tiles.wallLeft));
          break;

        case "8":
          entities.push(new Obstacle(worldX, worldY, images.tiles.wallRight));
          break;

        case "A":
          entities.push(
            new Obstacle(worldX, worldY, images.tiles.wallTopLeftCorner),
          );
          break;

        case "B":
          entities.push(
            new Obstacle(worldX, worldY, images.tiles.wallTopRightCorner),
          );
          break;

        case "C":
          entities.push(
            new Obstacle(worldX, worldY, images.tiles.wallDownLeftCorner),
          );
          break;

        case "D":
          entities.push(
            new Obstacle(worldX, worldY, images.tiles.wallDownRightCorner),
          );
          break;
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
}
