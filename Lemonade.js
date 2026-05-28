import { Drink } from './Drink.js';

export class Lemonade extends Drink {
  constructor(name, size, price, temperature, flavor, sparkling) {
    super(name, size, price, temperature);

    this.flavor = flavor;
    this.sparkling = sparkling;
  }

  getLemonadeInfo() {
    return `Вкус: ${this.flavor}, Газированный: ${this.sparkling}`;
  }
}