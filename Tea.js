import { Drink } from './Drink.js';

export class Tea extends Drink {
  constructor(name, size, price, temperature, tea, sugar) {
    super(name, size, price, temperature);
    this.tea = tea;
    this.sugar = sugar;
  }

  getTeaInfo() {
    return `Чай: ${this.tea}, Сахар: ${this.sugar}`;
  }
}