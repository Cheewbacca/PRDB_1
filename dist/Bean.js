"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeBean = void 0;
class Bean {
    constructor(name, country) {
        this.name = name;
        this.country = country;
        this.name = name;
        this.country = country;
    }
    get beanName() {
        return this.name;
    }
    getCountry() {
        return this.country;
    }
}
class CoffeeBean extends Bean {
    constructor(name, country, caffein, description) {
        super(name, country);
        this.name = name;
        this.country = country;
        this.caffein = caffein;
        this.description = description;
        this.caffein = caffein;
        this.description = description;
    }
    getFullInfo() {
        return `${this.name} from ${this.getCountry()} contains ${this.caffein}mg caffein and has description: ${this.description}`;
    }
    getCaffeine() {
        return this.caffein;
    }
}
exports.CoffeeBean = CoffeeBean;
//# sourceMappingURL=Bean.js.map