"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get myName() {
        return this.name;
    }
    get myAge() {
        return this.age;
    }
}
class Customer extends Person {
    constructor(name, age, money) {
        super(name, age);
        this.money = money;
        this.money = money;
    }
    define() {
        console.log(`My name is ${this.myName}, I am ${this.myAge} years old and I have ${this.money} $`);
    }
    setMoney(money) {
        this.money = money;
    }
    get moneyLeft() {
        return this.money;
    }
    makeOrder(target, subject) {
        return new Promise((resolve, reject) => {
            target
                .createOrder(this, subject)
                .then(() => console.log("Order is done"))
                .catch((errorMessage) => reject(errorMessage))
                .finally(() => resolve());
        });
    }
    showMyOrders(target) {
        target.showCustomerOrders(this);
    }
}
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map