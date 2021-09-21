"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(orderSubject, price, customer) {
        this.orderSubject = orderSubject;
        this.price = price;
        this.customer = customer;
        this.orderSubject = orderSubject;
        this.date = new Date();
        this.price = price;
        this.customer = customer;
    }
    get fullInfo() {
        return `${this.orderSubject} was made on ${this.date.toLocaleString()} for ${this.customer.myName} and cost ${this.price} $`;
    }
    get MyCustomer() {
        return this.customer;
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map