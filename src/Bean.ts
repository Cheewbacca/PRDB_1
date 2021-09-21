abstract class Bean {
  constructor(protected name: string, protected country: string) {
    this.name = name;
    this.country = country;
  }

  get beanName(): string {
    return this.name;
  }

  getCountry(): string {
    return this.country;
  }
}

export class CoffeeBean extends Bean {
  constructor(
    protected name: string,
    protected country: string,
    private caffein: number,
    private description: string
  ) {
    super(name, country);
    this.caffein = caffein;
    this.description = description;
  }

  getFullInfo(): string {
    return `${this.name} from ${this.getCountry()} contains ${
      this.caffein
    }mg caffein and has description: ${this.description}`;
  }

  getCaffeine(): number {
    return this.caffein;
  }
}
