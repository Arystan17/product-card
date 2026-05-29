export class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `${this.name}, размер: ${this.size}, цена: ${this.price}, температура: ${this.#temperature}°C`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temperature) {
    this.#temperature = temperature;
  }

  #prepare() {
    console.log(`${this.name} готовится`);
  }

  serve() {
    this.#prepare();

    console.log(`${this.name} подан`);
  }
}