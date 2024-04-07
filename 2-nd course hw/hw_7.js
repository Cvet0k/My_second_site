// Задача 1 task

let line = 'js';
const lineUp = line.toUpperCase();
console.log(lineUp);

// Задача 2 task

const lineMassiv2 = ['Солнце светит', 'Туча закрыла солнце', 'Солнечный свет', 'Белый лед', 'Солнце и лед'];
let line2 = 'СолНце';
const NewLineMassiv2 = lineMassiv2.filter(lines => lines.toLowerCase().startsWith(line2.toLowerCase()));
console.log(NewLineMassiv2);

// Задача 3 task

let number = 32.5884;
console.log(Math.floor(number), Math.ceil(number), Math.round(number));

// Задача 4 task

console.log(Math.min(52, 53, 49, 77, 21, 32), Math.max(52, 53, 49, 77, 21, 32));

// Задача 5 task

console.log(Math.floor(Math.random() * 10));

// Задача 6 task

let n = Math.floor(Math.random() * 15);
console.log(n);
const massiv6 = [];
for (let index = 0; index < Math.round(n * 0.5); index++) {
    massiv6.push(Math.floor(Math.random() * n));
}
console.log(massiv6);

// Задача 7 task

let n7 = Math.floor(Math.random() * 100);
let k7 = Math.floor(Math.random() * 100);

function randomNum(n7, k7) {
    let max;
    let min;
    n7 > k7 ? max = n7 : max = k7;
    n7 < k7 ? min = n7 : min = k7;
    if (n7 === k7) {
        max = n7;
        min = k7
    }
    console.log(`Диапазон ${max}-${min}`);
    console.log(Math.floor(Math.random() * (max - min) + min));
}
randomNum(n7, k7);

// Задача 8 task

let myDate = new Date();
console.log(myDate);

// Задача 9 task

let currentDate = new Date();
let day73 = 73 * 24 * 60 * 60 * 1000;
let dateForward73 = new Date(+currentDate + day73);
console.log(dateForward73);

// Задача 10 task


function rusDateTime(myDate){
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
        "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let rusDate = ['Дата:', myDate.getDate(), months[myDate.getMonth()], myDate.getFullYear(),'— это ', days[myDate.getDay()]];
    let rusTime = ['Время', myDate.getHours(), myDate.getMinutes(), myDate.getSeconds()];
    let rusDateStr = rusDate.join(' ');
    let rusTimeStr = rusTime.join(':');
    console.log(rusDateStr);
    console.log(rusTimeStr);
}
rusDateTime(myDate);

