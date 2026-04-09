import { productCards } from "./products.js";

const productCardsTemplate = document.querySelector('#product-card-template');
const allCardsContainer = document.querySelector('.all-cards-container');

function createProductCard(cardsArray) {
  allCardsContainer.innerHTML = '';

  cardsArray.forEach(productCard => {
  const productCardClone = productCardsTemplate.content.cloneNode(true);

  productCardClone.querySelector('.product-img').src = `./img/${productCard.img}.png`;
  productCardClone.querySelector('.product-img').alt = productCard.name;

  productCardClone.querySelector('.product-name').textContent = productCard.name;
  productCardClone.querySelector('.product-description').textContent = productCard.description;

  const compoundList = productCardClone.querySelector('.product-compound');

  productCard.compound.forEach(item => {
    const li = document.createElement('li');
    li.className = 'product-compound-item';
    li.textContent = item;
    compoundList.appendChild(li);
  });

  productCardClone.querySelector('.product-price').innerHTML = `${productCard.price} &#8381`;

    allCardsContainer.appendChild(productCardClone);
  });
}

const productDescriptions = productCards.reduce((acc, item) => { 
  return [...acc, { [item.name]: item.description }];
}, []);

console.log(productDescriptions);

function getNumberOfCards() {
  let result = prompt("Сколько карточек отобразить? От 1 до 5", " ");
  const num = parseInt(result);

  if (!result) {
    alert('Вы отказались от ввода');
    return 5;
  } if (isNaN(num) || num < 1 || num > 5) {
    alert('Ошибка! Введите число от 1 до 5');
    return getNumberOfCards();
  }

  alert(`Будет отображено ${num} карточки`);
  return num;
}

function init() {
  const cardsCount = getNumberOfCards();
  const cardsToShow = productCards.slice(0, cardsCount);
  createProductCard(cardsToShow);
}

document.addEventListener('DOMContentLoaded', init);