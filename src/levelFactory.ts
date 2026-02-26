class LevelFactory {
  public tiles: p5.Image[] = [];
  /* public isCollision: p5.Image[] = [];  kanske behöver*/
  public x: number = 0;
  public y: number = 0;
  public levelGrid: string[][] = [];
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
    const level = new Level(entities);
    this.levelGrid = this.loadMap(levels[index]);
    const levelGrid = this.levelGrid;

    while (worldCol < levelGrid[0].length && worldRow < levelGrid.length) {
      let worldX = worldCol * GamePanel.tileSize;
      let worldY = worldRow * GamePanel.tileSize;

      const entityNumber = levelGrid[worldRow][worldCol];
      if (
        entityNumber === '.' ||
        entityNumber === 'g' ||
        entityNumber === 'b' ||
        entityNumber === 't' ||
        entityNumber === 'X' ||
        entityNumber === 'Y' ||
        entityNumber === 'Z' ||
        entityNumber === 'V' 
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
        const player = new Player(worldX, worldY, 5, level);
        level.player = player;
        entities.push(player);
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
        entities.push(new GreenEnemy(worldX, worldY, 3, level));
      }
      if (entityNumber === "Y") {
        entities.push(new BlueEnemy(worldX, worldY, 4, level));
      }
      if (entityNumber === "Z") {
        entities.push(new RedEnemy(worldX, worldY, 5, level));
      }
      if (entityNumber === 'V') {
        entities.push(new Boss(worldX, worldY, 10, level));
      }

      worldCol++;

      if (worldCol === levelGrid[0].length) {
        worldCol = 0;
        worldRow++;
      }
    }

    entities.sort((a,b) => a.zIndex - b.zIndex);

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
