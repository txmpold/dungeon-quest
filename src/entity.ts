class Entity {
  public gp: GamePanel;
  protected worldX: number;
  protected worldY: number;
  public speed: p5.Vector;
  public image: p5.Image[] = [];
  public collisionOn: boolean = false;
  public direction: "up" | "down" | "left" | "right" = "down";
  public frameIndex = 0;
  public animations: {
    up1: p5.Image[];
    up2: p5.Image[];
    down1: p5.Image[];
    down2: p5.Image[];
    left1: p5.Image[];
    left2: p5.Image[];
    right1: p5.Image[];
    right2: p5.Image[];
  } = {
    up1: [],
    up2: [],
    down1: [],
    down2: [],
    left1: [],
    left2: [],
    right1: [],
    right2: [],
  };

  constructor(gp: GamePanel, worldX: number, worldY: number, speed: p5.Vector) {
    this.gp = gp;
    this.worldX = worldX;
    this.worldY = worldY;
    this.speed = speed;
  }

  public update() {}

  public draw() {}
}
