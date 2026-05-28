export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getCafeInfo() {
    return `Кафе "${this.name}" находится по адресу: ${this.location}`;
  }

  orderDrink(drink) {
    console.log(`Вы заказали напиток: ${drink.name}`);

    drink.serve();

    console.log(`Информация о напитке: ${drink.getInfo()}`);
  }
}