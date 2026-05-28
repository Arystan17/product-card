import { Coffee } from './Coffee.js';
import { Tea } from './Tea.js';
import { Lemonade } from './Lemonade.js';
import { Cafe } from './Cafe.js';

const coffee = new Coffee(
  'Латте',
  'Большой',
  1500,
  70,
  'Арабика',
  'Овсяное'
);

const tea = new Tea(
  'Чёрный чай',
  'Средний',
  700,
  80,
  'Ассам',
  '2 ложки'
);

const lemonade = new Lemonade(
  'Лимонад',
  'Большой',
  1000,
  5,
  'Лимон',
  'Да'
);

const cafe = new Cafe(
  'Coffee Avangard',
  'проспект Чемпионов, 55'
);

console.log(cafe.getCafeInfo());

cafe.orderDrink(coffee);
cafe.orderDrink(tea);
cafe.orderDrink(lemonade);

console.log(coffee.getCoffeeInfo());
console.log(tea.getTeaInfo());
console.log(lemonade.getLemonadeInfo());