// Задание 3 - Создание объекта на основе своих данных 

const user = {
  name: "Arystan",
  surname: "Zhusupbaev",
  age: 26,
  email: "zhusupbaev11@bk.ru",
  job: "Хоккейный аналитик",
  city: "Omsk",
}

console.log(user);

// Задание 4 - Создание объекта на основе данных авто

const auto = {
  brand: "Mersedes-benz",
  model: "E 250",
  release: "2025",
  color: "white",
  transmission: "automatic",
}

auto.owner = user;

console.log(auto);

// Задание 5 - Проверка максимальной скорости авто

function addMaxSpeed(auto) {
  if (!auto.maxSpeed) {
    auto.maxSpeed = 250;
  }
}

addMaxSpeed(auto);

console.log(auto.maxSpeed);

// Задание 6 - Написание функции с двумя аргументами

function showProperty(obj, prop) {
  console.log(obj[prop]);
}

showProperty(auto, "brand");

// Задание 7 - Создание массива с продуктами

const products = ["молоко", "яйца", "творог"];

console.log(products);

// Задание 8 - Создание массива из объектов

const hockeyTeam = [
  {
    team: "Авангард",
    league: "КХЛ",
    city: "Омск",
    coach: "Ги Буше",
  },

  {
    team: "Динамо",
    league: "КХЛ",
    city: "Москва",
    coach: "Вячеслав Козлов",
  },
    
  {
    team: "Барыс",
    league: "КХЛ",
    city: "Астана",
    coach: "Михаил Кравец",
  },

  {
    team: "Лада",
    league: "КХЛ",
    city: "Тольятти",
    coach: "Павел Десятков",
  }
]

hockeyTeam.push(
  {
    team: "Спартак",
    league: "КХЛ",
    city: "Москва",
    coach: "Алексей Жамнов",
  }
);

console.log(hockeyTeam);

// Задание 9 - Создание нового массива и объединение с предыдушим

const hockeyTeamNhl = [
  {
    team: "Seattle Kraken",
    league: "NHL",
    city: "Сиэтл",
    coach: "Lane Lambert",
  },

  {
    team: "New York Rangers",
    league: "NHL",
    city: "Нью‑Йорк",
    coach: "Mike Sullivan",
  },

  {
    team: "Pittsburgh Penguins",
    league: "NHL",
    city: "Питтсбург",
    coach: "Dan Muse",
  },
];

const allTeams = [...hockeyTeam, ...hockeyTeamNhl];

console.log(allTeams);

// Задание 10 - Создание функции, принимающей массив сущностей с предыдущего задания

function markRareTeams(teamArray) {
    const updatedTeams = teamArray.map((team) => {
        return { ...team, isRare: team.league === "NHL" }
    });
    return updatedTeams;
}

const finalTeamsWithRarity = markRareTeams(allTeams);

console.log(finalTeamsWithRarity);