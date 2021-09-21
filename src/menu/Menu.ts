import { MenuItem } from "./MenuItem";

interface MenuInterface {
  menu: MenuItem[];
  showMenu(): string;
  getDrinksNames(): string[];
  getMenuItem(name: string): MenuItem | false;
}

export class Menu implements MenuInterface {
  constructor(public menu: MenuItem[]) {
    this.menu = menu;
  }

  showMenu(): string {
    return this.menu
      .map(
        (menuItem: MenuItem) =>
          `${menuItem.getDrink().getName()} costet ${menuItem.getPrice()} $`
      )
      .join("; ");
  }

  getDrinksNames(): string[] {
    return this.menu.map((menuItem: MenuItem) => menuItem.getDrink().getName());
  }

  getMenuItem(name: string): MenuItem | false {
    return (
      this.menu.find((menuItem) => menuItem.getDrink().getName() === name) ||
      false
    );
  }
}
