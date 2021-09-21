import { Customer } from "./Customer";
import { CoffeeBean } from "./Bean";
import { CoffeeDrink } from "./Drink";
import { Menu } from "./menu/Menu";
import { MenuItem } from "./menu/MenuItem";
import { CoffeeShop } from "./Shop";

const arabic = new CoffeeBean(
  "arabica",
  "Columbia",
  0.4,
  "an evergreen shrub or tree (Coffea arabica) yielding seeds that produce a high-quality coffee and form a large portion of the coffee of commerce"
);

console.log(arabic.getFullInfo(), "\n");

const robusta = new CoffeeBean(
  "robusta",
  "Ethiopia",
  0.9,
  "The coffee grown in and around Bukit Barisan Selatan is a variety known as Coffea canephora or, more commonly, robusta"
);

console.log(robusta.getFullInfo(), "\n");

const espresso = new CoffeeDrink(
  "espresso",
  50,
  "coffee and water",
  arabic,
  false
);

console.log(espresso.getFullInfo(), "\n");

const cappuccino = new CoffeeDrink(
  "cappuccino",
  50,
  "coffee, water and milk",
  robusta,
  true
);

console.log(cappuccino.getFullInfo(), "\n");

const latte = new CoffeeDrink(
  "latte",
  350,
  "coffee, water and milk",
  arabic,
  true
);

console.log(latte.getFullInfo(), "\n");

const espressoMenuItem = new MenuItem(espresso, 1);
const latteMenuItem = new MenuItem(latte, 3.5);
const cappucinoMenuItem = new MenuItem(cappuccino, 3.0);

const CoffeeScriptMenu = new Menu([
  espressoMenuItem,
  latteMenuItem,
  cappucinoMenuItem,
]);

const CoffeeScript = new CoffeeShop(
  "CoffeeScript",
  "Pushkin street, 42",
  "+38055 555 55 55",
  30,
  CoffeeScriptMenu
);

console.log(CoffeeScript.define());
console.log(CoffeeScript.menuList.showMenu());
console.log("\n");

const Ivan = new Customer("Ivan", 21, 3);
Ivan.define();
console.log("\n");

const Olga = new Customer("Olga", 21, 10);
Olga.define();
console.log("\n");

const newCustomersOrder = (
  customer: Customer,
  coffeeShop: CoffeeShop,
  drink: string
): Promise<void> => {
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
