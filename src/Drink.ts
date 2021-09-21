import { CoffeeBean } from "./Bean";

abstract class Drink {
  constructor(
    protected name: string,
    protected volume: number,
    protected composition: string
  ) {
    this.name = name;
    this.volume = volume;
    this.composition = composition;
  }

  getFullInfo(): string {
    return `${this.name} usually has a volume of ${this.volume} ml and consists of ${this.composition}`;
  }

  getComposition(): string {
    return this.composition;
  }

  getVolume(): string {
    return `${this.volume} ml`;
  }

  getName(): string {
    return this.name;
  }
}

export class CoffeeDrink extends Drink {
  constructor(
    protected name: string,
    protected volume: number,
    protected composition: string,
    private bean: CoffeeBean,
    private containsMilk: boolean = false
  ) {
    super(name, volume, composition);
    this.bean = bean;
    this.containsMilk = containsMilk;
  }

  getCaffeine(): number {
    return this.bean.getCaffeine() * this.volume;
  }

  getFullInfo(): string {
    return `${this.name} usually has a volume of ${
      this.volume
    } ml and consists of ${
      this.composition
    }, has ${this.getCaffeine()} mg caffeine and has ${
      this.containsMilk ? "" : "no"
    } milk`;
  }
}
