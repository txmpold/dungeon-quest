/// <reference path="entity.ts" />
class Loot extends Entity {
  constructor(worldX: number, worldY: number, image: p5.Image) {
    super(worldX, worldY, image);
  }

  public update() {
    super.update();
  }

  public push() {}
  public drawLoot() {
    this.draw();
  }
}

class HealthBoost extends Loot {
  constructor(worldX: number, worldY: number, image: p5.Image) {
    super(worldX, worldY, image);
  }

  public checkPlayerHealth() {}
}

class PowerUp extends Loot {
  constructor(worldX: number, worldY: number, image: p5.Image) {
    super(worldX, worldY, image);
  }

  public upgradePlayerVelocity() {}
}
