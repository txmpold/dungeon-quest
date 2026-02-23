/// <reference path="enemy.ts" />
class RedEnemy extends Enemy {
  protected health: number;
  // private direction: p5.Vector;
  private redPos = createVector(0, 0);
  private level: Level;
  constructor(worldX: number, worldY: number, health: number, level: Level) {
    const row = 2;
    const col = 0;
    const totalCol = 8;
    super(
      worldX,
      worldY,
      createVector(0, 0),
      images.slime,
      row,
      col,
      totalCol,
      health,
    );
    this.health = health;
    this.level = level;
    this.redPos = createVector(0, 0);
  }
  public update() {
    super.update();
  }

  public updatePos() {
    this.redPos.add(this.speed);
  }
  public shootProjectile() {}

  public fly() {}
}
