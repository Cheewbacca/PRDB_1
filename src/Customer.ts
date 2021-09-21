import { CoffeeShop } from "./Shop";

abstract class Person {
  constructor(private name: string, private age: number) {}

  get myName(): string {
    return this.name;
  }

  get myAge(): number {
    return this.age;
  }
}

export class Customer extends Person {
  constructor(name: string, age: number, private money: number) {
    super(name, age);
    this.money = money;
  }

  define(): void {
    console.log(
      `My name is ${this.myName}, I am ${this.myAge} years old and I have ${this.money} $`
    );
  }

  setMoney(money: number) {
    this.money = money;
  }

  get moneyLeft(): number {
    return this.money;
  }

  makeOrder(target: CoffeeShop, subject: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      target
        .createOrder(this, subject)
        .then(() => console.log("Order is done"))
        .catch((errorMessage) => reject(errorMessage))
        .finally(() => resolve());
    });
  }

  showMyOrders(target: CoffeeShop): void {
    target.showCustomerOrders(this);
  }
}
