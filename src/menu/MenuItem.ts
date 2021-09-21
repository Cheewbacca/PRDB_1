import { CoffeeDrink } from "../Drink";

interface MenuItemInterface {
  drink: CoffeeDrink;
  price: number;
  getPrice(): number;
  getDrink(): CoffeeDrink;
}

export class MenuItem implements MenuItemInterface {
  constructor(public drink: CoffeeDrink, public price: number) {
    this.drink = drink;
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }

  getDrink(): CoffeeDrink {
    return this.drink;
  }
}
