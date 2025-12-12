// Задание 3 - Создание функции принимающей два параметра

function getTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию `)
}

getTemperature(`Омске`, `+15`)

// Задание 4 - Задача со скоростью света 

const speedOfLight = 299762;

function checkSpeed(speed) {
  if (speed > speedOfLight) {
    console.log(`Сверхсветовая скорость`);
  } else if (speed < speedOfLight) {
    console.log(`Субсветовая скорость`);
  } else {
    console.log(`Скорость света`);
  }
}

// Задание 5 - Создание переменных с продуктом и его ценой 

const product = `It Simulator`;
const price = `150000`;

function buyProduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретен. Спасибо за покупку!`);
  } else {
    const difference = price - budget
    console.log(`Вам не хватает ${difference}, пополните баланс`);
  }
}

buyProduct(140000)
buyProduct(240000)

// Задание 6 - Создание своей функции

function matchResult(team1, team2) {
  console.log(`Сейчас ${team1} выигрывает ${team2} со счетом 3:1`)
}

matchResult(`Авангард`, `Динамо`)

// Задание 7 - Создание своих переменных 

let color = `blue`;
let hobby = `hockey`;
const personality = `сhamp`;