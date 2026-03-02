/// <reference path="entity.ts" />
abstract class Enemy extends Entity {
  public health: number;
  public isKilled = false;
  protected levelContext: ILevelContext;

  constructor(
    worldX: number,
    worldY: number,
    image: p5.Image,
    row: number,
    col: number,
    totalCol: number,
    health: number,
    levelContext: ILevelContext,
  ) {
    const speed = createVector(0, 0);
    super(worldX, worldY, image, speed, row, col, totalCol, 10);
    this.health = health;
    this.levelContext = levelContext;
  }

  public onCollision(other: Entity): void {}

  public takeDamage(damage: number) {
    this.health -= damage;
    soundEffects.explosion.play();
    console.log(this.worldX, this.worldY);
    if (this.health < 1) {
      this.isKilled = true;
    }
  }

  public draw() {
    push();
    super.draw();
    for (let hp = 0; hp < this.health; hp++) {
      image(images.heart, this.worldX + hp * 17, this.worldY - 16, 16, 16);
    }
  }

  public update(entities: Entity[]) {
    this.engage();
    super.update(entities);
  }

  protected abstract engage(): void;
}
