import { Drink } from './Drink.js';

export class Coffee extends Drink {
  constructor(name, size, price, temperature, beansType, milkType) {
    super(name, size, price, temperature);
    this.beansType = beansType;
    this.milkType = milkType;
  }

  getCoffeeInfo() {
    return `Вид зерен: ${this.beansType}, Молоко: ${this.milkType}`;
  }
}