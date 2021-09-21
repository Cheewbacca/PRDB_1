"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
const Bean_1 = require("./Bean");
const Drink_1 = require("./Drink");
const Menu_1 = require("./menu/Menu");
const MenuItem_1 = require("./menu/MenuItem");
const Shop_1 = require("./Shop");
const arabic = new Bean_1.CoffeeBean("arabica", "Columbia", 0.4, "an evergreen shrub or tree (Coffea arabica) yielding seeds that produce a high-quality coffee and form a large portion of the coffee of commerce");
console.log(arabic.getFullInfo(), "\n");
const robusta = new Bean_1.CoffeeBean("robusta", "Ethiopia", 0.9, "The coffee grown in and around Bukit Barisan Selatan is a variety known as Coffea canephora or, more commonly, robusta");
console.log(robusta.getFullInfo(), "\n");
const espresso = new Drink_1.CoffeeDrink("espresso", 50, "coffee and water", arabic, false);
console.log(espresso.getFullInfo(), "\n");
const cappuccino = new Drink_1.CoffeeDrink("cappuccino", 50, "coffee, water and milk", robusta, true);
console.log(cappuccino.getFullInfo(), "\n");
const latte = new Drink_1.CoffeeDrink("latte", 350, "coffee, water and milk", arabic, true);
console.log(latte.getFullInfo(), "\n");
const espressoMenuItem = new MenuItem_1.MenuItem(espresso, 1);
const latteMenuItem = new MenuItem_1.MenuItem(latte, 3.5);
const cappucinoMenuItem = new MenuItem_1.MenuItem(cappuccino, 3.0);
const CoffeeScriptMenu = new Menu_1.Menu([
    espressoMenuItem,
    latteMenuItem,
    cappucinoMenuItem,
]);
const CoffeeScript = new Shop_1.CoffeeShop("CoffeeScript", "Pushkin street, 42", "+38055 555 55 55", 30, CoffeeScriptMenu);
console.log(CoffeeScript.define());
console.log(CoffeeScript.menuList.showMenu());
const Ivan = new Customer_1.Customer("Ivan", 21, 3);
Ivan.define();
console.log("\n");
const Olga = new Customer_1.Customer("Olha", 21, 10);
Olga.define();
console.log("\n");
const newCustomersOrder = (customer, coffeeShop, drink) => {
    return customer
        .makeOrder(coffeeShop, drink)
        .catch((e) => console.log(e))
        .finally(() => console.log("\n"));
};
const makeOrders = async () => {
    await newCustomersOrder(Ivan, CoffeeScript, "espresso");
    await newCustomersOrder(Olga, CoffeeScript, "latte");
    await newCustomersOrder(Olga, CoffeeScript, "espresso");
    await newCustomersOrder(Ivan, CoffeeScript, "wrongName");
    await newCustomersOrder(Olga, CoffeeScript, "espresso");
    await newCustomersOrder(Olga, CoffeeScript, "espresso");
};
const showResults = async () => {
    await makeOrders().catch((e) => console.log(e));
    Ivan.showMyOrders(CoffeeScript);
    Olga.showMyOrders(CoffeeScript);
};
showResults().catch((e) => console.log(e));
//# sourceMappingURL=index.js.map