// Покраска всех карточек

const productCards = document.querySelectorAll('.card-container')
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00ff00';
const blueColorHash = '#0000FF'

changeColorAllCardButton.addEventListener('click', () => { 
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash) 
})


// Покраска первой карточки

const firstProductCard = document.querySelector('.card-container')
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})

// Открыть google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click',() => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

// Задание 6

const mainTitle = document.querySelector('.title');

mainTitle.addEventListener('mouseenter', () => {
  console.log(mainTitle.textContent);
});

// Задание 7

const toggleColorBtn = document.querySelector('#toggle-color-btn');

toggleColorBtn.addEventListener('click', () => {
  toggleColorBtn.classList.toggle('bg-blueviolet');
});