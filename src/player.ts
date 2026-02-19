/// <reference path="entity.ts" />
class Player extends Entity {
  protected health: number;
  protected weaponInventory: p5.Image[];

  constructor() {
    const position = createVector(width * 0.5, height * 0.5);
    const velocity = createVector(0, 0);
    const row = 0;
    const col = 0;
    const totalCol = 4;
    super(position, velocity, images.character, row, col, totalCol);
    this.health = 5;
    this.weaponInventory = [images.weapon];
  }

  public update() {
    this.move();
    this.playerAttack();
    super.update();
  }

  public updatePlayerPos() {
    this.position.add(this.velocity);
  }

  public move() {
    this.velocity.set(0, 0);
    this.row = 0;

    if (keyIsDown(RIGHT_ARROW)) {
      this.velocity.x = 2;
      this.row = 1;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.velocity.x = -2;
      this.row = 5;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.velocity.y = 2;
      this.row = 3;
    } else if (keyIsDown(UP_ARROW)) {
      this.velocity.y = -2;
      this.row = 2;
    }
  }

  public playerAttack() {
    if (keyIsDown(75)) {
      const bullet = new Projectile(this.position.copy());
      projectiles.push(bullet);
    }
  }
  // public updatePlayerPosition() {}
  // public getWeapon() {}
  // public getHealth() {}
  // public checkDamage() {}
}
