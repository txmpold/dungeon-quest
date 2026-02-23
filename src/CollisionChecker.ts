class CollisionChecker {
  public gp: GamePanel;

  constructor(
    gp: GamePanel,
    public levelFactory: LevelFactory,
  ) {
    this.gp = gp;
  }

  public checkTile(entity: Entity) {}
}
