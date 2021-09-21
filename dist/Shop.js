"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeShop = void 0;
const Order_1 = require("./Order");
class Shop {
    constructor(name, address, phone, places, menu) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.places = places;
        this.menu = menu;
        this.orders = [];
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.places = places;
        this.menu = menu;
    }
    define() {
        return `${this.name} located on ${this.address}. Call ${this.phone} to book a place. ${this.name} has ${this.places} places at all`;
    }
    addOrder(newOrder) {
        this.orders.push(newOrder);
    }
    getAllOrders() {
        return this.orders.map((order) => order.fullInfo).join(", ");
    }
    showCustomerOrders(customer) {
        const thisCustomerOrders = this.orders.filter((order) => order.MyCustomer === customer);
        const thisCustomerName = customer.myName;
        thisCustomerOrders.length
            ? console.log(thisCustomerOrders.map((order) => order.fullInfo).join(", "))
            : console.log(`Nothing was made for ${thisCustomerName} yet`);
    }
    get menuList() {
        return this.menu;
    }
}
class CoffeeShop extends Shop {
    constructor(name, address, phone, places, menu) {
        super(name, address, phone, places, menu);
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.places = places;
        this.menu = menu;
    }
    makeDrink(drinkName, customer) {
        return new Promise((resolve, reject) => {
            const selectedDrink = this.menu.getMenuItem(drinkName);
            if (selectedDrink) {
                setTimeout(() => resolve(console.log(`${selectedDrink.getDrink().getName()} for ${customer.myName} is ready`)), 2000);
            }
            else {
                reject(`Sorry, we have not "${drinkName}" drink yet`);
            }
        });
    }
    createOrder(customer, subject) {
        return new Promise((resolve, reject) => {
            const subjectFromMenu = this.menu.getMenuItem(subject);
            if (subjectFromMenu) {
                const price = subjectFromMenu.getPrice();
                const customersMoney = customer.moneyLeft;
                if (price <= customersMoney) {
                    const newOrder = new Order_1.Order(subject, price, customer);
                    this.addOrder(newOrder);
                    customer.setMoney(customersMoney - price);
                    this.makeDrink(subject, customer)
                        .then(() => resolve())
                        .catch((e) => reject(e));
                }
                else {
                    reject(`Sorry, ${customer.myName}, you do not have enough money. You should get ${price - customersMoney}$ more `);
                }
            }
            else {
                reject(`Sorry, we have not "${subject}" drink yet`);
            }
        });
    }
}
exports.CoffeeShop = CoffeeShop;
//# sourceMappingURL=Shop.js.map