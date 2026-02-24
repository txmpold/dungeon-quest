class LevelFactory {
  public tiles: p5.Image[] = [];
  /* public isCollision: p5.Image[] = [];  kanske behöver*/
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

  public generateLevel(gp: GamePanel, index: number): Level {
    let entities: Entity[] = [];
    let worldCol = 0;
    let worldRow = 0;
    let player: Player | undefined;
    const level = new Level(gp, entities);
    const levelGrid = this.loadMap(levels[index]);

    while (worldCol < levelGrid[0].length && worldRow < levelGrid.length) {
      let worldX = worldCol * GamePanel.tileSize;
      let worldY = worldRow * GamePanel.tileSize;

      const entityNumber = levelGrid[worldRow][worldCol];
      if (
        entityNumber === "." ||
        entityNumber === "g" ||
        entityNumber === "b" ||
        entityNumber === "t" ||
        entityNumber === "X" ||
        entityNumber === "Y" ||
        entityNumber === "Z"
      ) {
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
        player = new Player(worldX, worldY, 5, level);
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
          new Obstacle(gp, worldX, worldY, images.tiles.wallTopLeftCorner),
        );
      }
      if (entityNumber === "B") {
        entities.push(
          new Obstacle(gp, worldX, worldY, images.tiles.wallTopRightCorner),
        );
      }
      if (entityNumber === "C") {
        entities.push(
          new Obstacle(gp, worldX, worldY, images.tiles.wallDownLeftCorner),
        );
      }
      if (entityNumber === "D") {
        entities.push(
          new Obstacle(gp, worldX, worldY, images.tiles.wallDownRightCorner),
        );
      }
      if (entityNumber === "g") {
        entities.push(new Obstacle(worldX, worldY, images.tiles.ghost));
      }
      if (entityNumber === "b") {
        entities.push(new Obstacle(worldX, worldY, images.tiles.barrel));
      }
      if (entityNumber === "t") {
        entities.push(new Obstacle(worldX, worldY, images.tiles.treasure));
      }
      if (entityNumber === "X") {
        entities.push(new GreenEnemy(worldX, worldY, 3));
      }
      if (entityNumber === "Y") {
        entities.push(new BlueEnemy(worldX, worldY, 4));
      }
      if (entityNumber === "Z") {
        entities.push(new RedEnemy(worldX, worldY, 5));
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
