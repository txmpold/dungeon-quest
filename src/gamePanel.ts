class GamePanel {
  static readonly originalTileSize = 16;
  static readonly scale = 3;

  static readonly tileSize = GamePanel.originalTileSize * GamePanel.scale;
  static readonly maxScreenCol = 16;
  static readonly maxScreenRow = 12;
  static readonly screenWidth = GamePanel.tileSize * GamePanel.maxScreenCol;
  static readonly screenHeight = GamePanel.tileSize * GamePanel.maxScreenRow;

  //world settings
  static readonly maxWorldCol = 70;
  static readonly maxWorldRow = 60;
  static readonly worldWidth = GamePanel.tileSize * GamePanel.maxScreenCol;
  static readonly worldHeight = GamePanel.tileSize * GamePanel.maxScreenRow;
}