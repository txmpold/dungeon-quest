/// <reference path="enemy.ts" />
class BlueEnemy extends Enemy {
  protected health: number;
  // private direction: p5.Vector;
  private bluePos = createVector(0, 0);
  private level: Level;

  constructor(worldX: number, worldY: number, health: number, level: Level) {
    const row = 1;
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
    this.bluePos = createVector(0, 0);
  }
  public update() {
    super.update();
  }
  public updatePos() {
    this.bluePos.add(this.speed);
  }

  public shootProjectile() {}
}
