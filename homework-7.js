import { comments } from "./comments.js";

// Задание 2 - Массив чисел от 1 до 10 и его фильтрация

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(number => number >= 5);

console.log(filteredNumbers);

// Задание 3 - Создание массива строка с определенной сущностью и проверка

const hockeyTeams = ["Авангард", "Барыс", "Северсталь"];

const checkAvangard = hockeyTeams.includes("Авангард");

console.log(checkAvangard);

// Задание 4 - Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный

function getReversedArray(array) {
  return [...array].reverse();
}

console.log(getReversedArray(numbers));
console.log(getReversedArray(hockeyTeams));

// Задание 7 - Вывод в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const comEmails = comments.filter(comment => comment.email.includes(".com"));
console.log(comEmails);

// Задание 8 - Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const updateComments = comments.map(comment => ({ 
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));

console.log(updateComments);

// Задание 9 - Перебрать массив, чтобы объекты состояли только из айди и имени

const idAndName = comments.map(comment => ({
  id: comment.id,
  name: comment.name,
}));

console.log(idAndName);

// Задание 10 - Перебираем массив, добавляем объектам свойство isInvalid

const commentsWithValidity = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

console.log(commentsWithValidity);

// Задание 11 - Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const emailsWithReduce = comments.reduce((accumulator, comment) => {
  accumulator.push(comment.email);
  return accumulator;
}, []);

console.log(emailsWithReduce);

const emailsWithMap = comments.map(comment => comment.email);

console.log(emailsWithMap);

// Задание 12 - Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.  


const emailsToString = emailsWithMap.toString();

console.log(emailsToString);


const emailsJoin = emailsWithMap.join("; ");

console.log(emailsJoin);
