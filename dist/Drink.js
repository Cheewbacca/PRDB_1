"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeDrink = void 0;
class Drink {
    constructor(name, volume, composition) {
        this.name = name;
        this.volume = volume;
        this.composition = composition;
        this.name = name;
        this.volume = volume;
        this.composition = composition;
    }
    getFullInfo() {
        return `${this.name} usually has a volume of ${this.volume} ml and consists of ${this.composition}`;
    }
    getComposition() {
        return this.composition;
    }
    getVolume() {
        return `${this.volume} ml`;
    }
    getName() {
        return this.name;
    }
}
class CoffeeDrink extends Drink {
    constructor(name, volume, composition, bean, containsMilk = false) {
        super(name, volume, composition);
        this.name = name;
        this.volume = volume;
        this.composition = composition;
        this.bean = bean;
        this.containsMilk = containsMilk;
        this.bean = bean;
        this.containsMilk = containsMilk;
    }
    getCaffeine() {
        return this.bean.getCaffeine() * this.volume;
    }
    getFullInfo() {
        return `${this.name} usually has a volume of ${this.volume} ml and consists of ${this.composition}, has ${this.getCaffeine()} mg caffeine and has ${this.containsMilk ? "" : "no"} milk`;
    }
}
exports.CoffeeDrink = CoffeeDrink;
//# sourceMappingURL=Drink.js.map