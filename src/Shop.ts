import { Customer } from "./Customer";
import { Menu } from "./menu/Menu";
import { Order } from "./Order";

abstract class Shop {
  orders: Order[] = [];

  constructor(
    protected name: string,
    protected address: string,
    protected phone: string,
    protected places: number,
    public menu: Menu
  ) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.places = places;
    this.menu = menu;
  }

  define(): string {
    return `${this.name} located on ${this.address}. Call ${this.phone} to book a place. ${this.name} has ${this.places} places at all`;
  }

  addOrder(newOrder: Order): void {
    this.orders.push(newOrder);
  }

  getAllOrders(): string {
    return this.orders.map((order) => order.fullInfo).join(", ");
  }

  showCustomerOrders<C>(customer: C): void;
  showCustomerOrders<S>(customerName: S): void;

  showCustomerOrders(customer: string | Customer): void {
    let thisCustomerOrders: Order[] = [];
    let thisCustomerName = "";

    if (typeof customer === "string") {
      thisCustomerOrders = this.orders.filter(
        (order) => order.MyCustomer.myName === customer
      );
      thisCustomerName = customer;
    } else {
      thisCustomerOrders = this.orders.filter(
        (order) => order.MyCustomer === customer
      );
      thisCustomerName = customer.myName;
    }

    thisCustomerOrders.length
      ? console.log(
          thisCustomerOrders.map((order) => order.fullInfo).join(", ")
        )
      : console.log(`Nothing was made for ${thisCustomerName} yet`);
  }

  get menuList(): Menu {
    return this.menu;
  }
}

export class CoffeeShop extends Shop {
  constructor(
    protected name: string,
    protected address: string,
    protected phone: string,
    protected places: number,
    public menu: Menu
  ) {
    super(name, address, phone, places, menu);
  }

  makeDrink(drinkName: string, customer: Customer): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const selectedDrink = this.menu.getMenuItem(drinkName);

      if (selectedDrink) {
        setTimeout(
          () =>
            resolve(
              console.log(
                `${selectedDrink.getDrink().getName()} for ${
                  customer.myName
                } is ready`
              )
            ),
          2000
        );
      } else {
        reject(`Sorry, we have not "${drinkName}" drink yet`);
      }
    });
  }

  createOrder(customer: Customer, subject: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const subjectFromMenu = this.menu.getMenuItem(subject);
      if (subjectFromMenu) {
        const price = subjectFromMenu.getPrice();
        const customersMoney = customer.moneyLeft;
        if (price <= customersMoney) {
          const newOrder = new Order(subject, price, customer);
          this.addOrder(newOrder);
          customer.setMoney(customersMoney - price);
          this.makeDrink(subject, customer)
            .then(() => resolve())
            .catch((e) => reject(e));
        } else {
          reject(
            `Sorry, ${
              customer.myName
            }, you do not have enough money. You should get ${
              price - customersMoney
            }$ more `
          );
        }
      } else {
        reject(`Sorry, we have not "${subject}" drink yet`);
      }
    });
  }
}
