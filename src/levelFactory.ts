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
        entityNumber === "q" ||
        entityNumber === "r" ||
        entityNumber === "s" ||
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
        entities.push(
          new AnimatedProp(
            worldX,
            worldY,
            images.tiles.animatedProps,
            15,
            1,
            3,
            5,
          ),
        );
      }
      if (entityNumber === "r") {
        entities.push(
          new MoreProps(worldX, worldY, images.tiles.moreProps, 0, 0, 6, 15),
        );
      }
      if (entityNumber === "c") {
        entities.push(
          new MoreProps(worldX, worldY, images.tiles.moreProps, 3, 6, 6, 10),
        );
      }
      if (entityNumber === "s") {
        entities.push(
          new MoreProps(
            worldX,
            worldY - GamePanel.tileSize * 0.7,
            images.tiles.moreProps,
            5,
            0,
            4,
            0,
          ),
        );
        entities.push(
          new MoreProps(
            worldX,
            worldY + GamePanel.tileSize * 0.3,
            images.tiles.moreProps,
            6,
            0,
            4,
            0,
          ),
        );
      }
      if (entityNumber === "5") {
        const obstacle = new Obstacle(worldX, worldY, images.tiles.wallTop);
        entities.push(obstacle);
        obstacle.setHitBox(0, 0, GamePanel.tileSize, GamePanel.tileSize * 0.5);
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
        const obstacle = new Obstacle(worldX, worldY, images.tiles.wallBottom);
        entities.push(obstacle);
        obstacle.setHitBox(
          0,
          GamePanel.tileSize * 0.5,
          GamePanel.tileSize,
          GamePanel.tileSize * 0.5,
        );
      }
      if (entityNumber === "E") {
        const obstacle = new Obstacle(
          worldX,
          worldY,
          images.tiles.wallCornerSpec,
        );
        entities.push(obstacle);
        obstacle.setHitBox(
          0,
          GamePanel.tileSize * 0.5,
          GamePanel.tileSize,
          GamePanel.tileSize * 0.5,
        );
      }
      if (entityNumber === "I") {
        const obstacle = new Obstacle(
          worldX,
          worldY,
          images.tiles.wallCornerSpec2,
        );
        entities.push(obstacle);
        obstacle.setHitBox(
          0,
          GamePanel.tileSize * 0.5,
          GamePanel.tileSize,
          GamePanel.tileSize * 0.5,
        );
      }
      if (entityNumber === "J") {
        const obstacle = new Obstacle(
          worldX,
          worldY,
          images.tiles.wallCornerSpec3,
        );
        entities.push(obstacle);
        obstacle.setHitBox(0, 0, GamePanel.tileSize, GamePanel.tileSize * 0.5);
      }
      if (entityNumber === "K") {
        const obstacle = new Obstacle(
          worldX,
          worldY,
          images.tiles.wallCornerSpec4,
        );
        entities.push(obstacle);
        obstacle.setHitBox(0, 0, GamePanel.tileSize, GamePanel.tileSize * 0.5);
      }
      if (entityNumber === "L") {
        entities.push(new Floor(worldX, worldY, images.tiles.floorCircle));
      }
      if (entityNumber === "N") {
        entities.push(new Floor(worldX, worldY, images.tiles.floorStone));
      }
      if (entityNumber === "M") {
        const obstacle = new Obstacle(
          worldX,
          worldY,
          images.tiles.wallCornerSpec5,
        );
        entities.push(obstacle);
        obstacle.setHitBox(0, 0, GamePanel.tileSize, GamePanel.tileSize * 0.5);
      }
      if (entityNumber === "g") {
        entities.push(
          new AnimatedProp(
            worldX,
            worldY,
            images.tiles.animatedProps,
            12,
            2,
            5,
            30,
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
        const enemy = new GreenEnemy(worldX, worldY, 3, level);
        entities.push(enemy);
        enemy.setHitBox(
          GamePanel.tileSize * 0.27,
          GamePanel.tileSize * 0.3,
          GamePanel.tileSize * 0.6,
          GamePanel.tileSize * 0.6,
        );
      }
      if (entityNumber === "Y") {
        const enemy = new BlueEnemy(worldX, worldY, 3, level);
        entities.push(enemy);
        enemy.setHitBox(
          GamePanel.tileSize * 0.27,
          GamePanel.tileSize * 0.3,
          GamePanel.tileSize * 0.6,
          GamePanel.tileSize * 0.6,
        );
      }
      if (entityNumber === "Z") {
        const enemy = new RedEnemy(worldX, worldY, 3, level);
        entities.push(enemy);
        enemy.setHitBox(
          GamePanel.tileSize * 0.27,
          GamePanel.tileSize * 0.3,
          GamePanel.tileSize * 0.6,
          GamePanel.tileSize * 0.6,
        );
      }
      if (entityNumber === "V") {
        entities.push(new Boss(worldX, worldY, 10, level));
      }
      if (entityNumber === "p") {
        const prop = new AnimatedProp(
          worldX,
          worldY,
          images.tiles.animatedProps,
          1,
          1,
          3,
          5,
        );
        entities.push(prop);

        prop.setHitBox(
          GamePanel.tileSize * 0.27,
          GamePanel.tileSize * 0.4,
          GamePanel.tileSize * 0.6,
          GamePanel.tileSize * 0.7,
        );
      }
      if (entityNumber === "q") {
        const prop = new AnimatedProp(
          worldX,
          worldY,
          images.tiles.animatedProps,
          5,
          1,
          3,
          10,
        );
        entities.push(prop);

        prop.setHitBox(
          GamePanel.tileSize * 0.2,
          GamePanel.tileSize * 0.1,
          GamePanel.tileSize * 0.6,
          GamePanel.tileSize * 0.7,
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
