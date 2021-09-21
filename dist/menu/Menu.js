"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
class Menu {
    constructor(menu) {
        this.menu = menu;
        this.menu = menu;
    }
    showMenu() {
        return this.menu
            .map((menuItem) => `${menuItem.getDrink().getName()} costet ${menuItem.getPrice()} $`)
            .join("; ");
    }
    getDrinksNames() {
        return this.menu.map((menuItem) => menuItem.getDrink().getName());
    }
    getMenuItem(name) {
        return (this.menu.find((menuItem) => menuItem.getDrink().getName() === name) ||
            false);
    }
}
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map