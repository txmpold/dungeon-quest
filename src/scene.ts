abstract class Scene {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }

  abstract update(): void;
  abstract draw(): void;
}
