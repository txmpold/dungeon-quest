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
        entityNumber === "." ||
        entityNumber === "4" ||
        entityNumber === "g" ||
        entityNumber === "b" ||
        entityNumber === "t" ||
        entityNumber === "c" ||
        entityNumber === "d" ||
        entityNumber === "e" ||
        entityNumber === "f" ||
        entityNumber === "X" ||
        entityNumber === "E" ||
        entityNumber === "H" ||
        entityNumber === "I" ||
        entityNumber === "J" ||
        entityNumber === "K" ||
        entityNumber === "L" ||
        entityNumber === "M" ||
        entityNumber === "N" ||
        entityNumber === "p" ||
        entityNumber === "Y" ||
        entityNumber === "Z" ||
        entityNumber === "V"
      ) {
        entities.push(new Floor(worldX, worldY, images.tiles.floor));
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
      if (entityNumber === ".") {
        entities.push(new Floor(worldX, worldY, images.tiles.floor));
      }
      if (entityNumber === "4") {
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
      if (entityNumber === "F") {
        entities.push(new Obstacle(worldX, worldY, images.tiles.wallShadow));
      }
      if (entityNumber === "H") {
        entities.push(new Obstacle(worldX, worldY, images.tiles.wallBottom));
      }
      if (entityNumber === "E") {
        entities.push(
          new Obstacle(worldX, worldY, images.tiles.wallCornerSpec),
        );
      }
      if (entityNumber === "I") {
        entities.push(
          new Obstacle(worldX, worldY, images.tiles.wallCornerSpec2),
        );
      }
      if (entityNumber === "J") {
        entities.push(
          new Obstacle(worldX, worldY, images.tiles.wallCornerSpec3),
        );
      }
      if (entityNumber === "K") {
        entities.push(
          new Obstacle(worldX, worldY, images.tiles.wallCornerSpec4),
        );
      }
      if (entityNumber === "L") {
        entities.push(new Floor(worldX, worldY, images.tiles.floorCircle));
      }
      if (entityNumber === "N") {
        entities.push(new Floor(worldX, worldY, images.tiles.floorStone));
      }
      if (entityNumber === "M") {
        entities.push(
          new Obstacle(worldX, worldY, images.tiles.wallCornerSpec5),
        );
      }
      if (entityNumber === "g") {
        entities.push(
          new AnimatedProp(
            worldX,
            worldY,
            images.tiles.animatedProps,
            12,
            1,
            5,
            60,
          ),
        );
      }
      if (entityNumber === "b") {
        entities.push(new Obstacle(worldX, worldY, images.tiles.barrel));
      }
      if (entityNumber === "t") {
        entities.push(
          new AnimatedProp(
            worldX,
            worldY,
            images.tiles.animatedProps,
            6,
            1,
            3,
            130,
          ),
        );
      }
      if (entityNumber === "c") {
        entities.push(new Obstacle(worldX, worldY, images.tiles.candelabra));
      }
      if (entityNumber === "d") {
        entities.push(new Obstacle(worldX, worldY, images.tiles.box1));
      }
      if (entityNumber === "e") {
        entities.push(new Obstacle(worldX, worldY, images.tiles.box2));
      }
      if (entityNumber === "f") {
        entities.push(new Obstacle(worldX, worldY, images.tiles.box3));
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
      if (entityNumber === "V") {
        entities.push(new Boss(worldX, worldY, 10, level));
      }
      if (entityNumber === "p") {
        entities.push(
          new AnimatedProp(
            worldX,
            worldY,
            images.tiles.animatedProps,
            1,
            1,
            3,
            40,
          ),
        );
      }

      worldCol++;

      if (worldCol === levelGrid[0].length) {
        worldCol = 0;
        worldRow++;
      }
    }

    entities.sort((a, b) => a.zIndex - b.zIndex);

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
