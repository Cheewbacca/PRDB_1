import { Customer } from "./Customer";

export class Order {
  private date: Date;
  constructor(
    private orderSubject: string,
    private price: number,
    private customer: Customer
  ) {
    this.orderSubject = orderSubject;
    this.date = new Date();
    this.price = price;
    this.customer = customer;
  }

  get fullInfo(): string {
    return `${
      this.orderSubject
    } was made on ${this.date.toLocaleString()} for ${
      this.customer.myName
    } and cost ${this.price} $`;
  }

  get MyCustomer(): Customer {
    return this.customer;
  }
}
