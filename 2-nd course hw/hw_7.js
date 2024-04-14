// Задача 1 task

let line = 'js';
const lineUp = line.toUpperCase();
console.log(lineUp);

// Задача 2 task

const lineMassiv2 = ['Солнце светит', 'Туча закрыла солнце', 'Солнечный свет', 'Белый лед', 'Солнце и лед'];
let line2 = 'СолНце';
const newLineMassiv2 = lineMassiv2.filter(lines => lines.toLowerCase().startsWith(line2.toLowerCase()));
console.log(newLineMassiv2);

// Задача 3 task

let number = 32.5884;
console.log(Math.floor(number), Math.ceil(number), Math.round(number));

// Задача 4 task

console.log(Math.min(52, 53, 49, 77, 21, 32), Math.max(52, 53, 49, 77, 21, 32));

// Задача 5 task
const randomNum5 = () => {
console.log(Math.floor(Math.random() * (10 - 1) + 1));
}
randomNum5();
// Задача 6 task
let n = Math.floor(Math.random() * 15);
function randomMassiv(n)  {
console.log(n);
const massiv6 = [];
for (let index = 0; index < Math.floor(n * 0.5); index++) {
    massiv6.push(Math.floor(Math.random() * n));
}
console.log(massiv6);
}
randomMassiv(n);

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

// Задача 9 -1  task

let currentDate = new Date();
let day73 = 73 * 24 * 60 * 60 * 1000;
let dateForward73 = new Date(+currentDate + day73);
console.log(dateForward73);

// Задача 9 - 2  task
let currentDate2 = new Date();
 currentDate2.setDate(currentDate2.getDate() + 73);
console.log( currentDate2);

// Задача 10 task


function rusDateTime(myDate){
    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг",
        "Пятница", "Суббота"];
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let minuta = myDate.getMinutes();
    let minutaUser;
    minuta < 10 ? minutaUser = '0' + myDate.getMinutes(): minutaUser =  minuta;
    let sekunda = myDate.getSeconds();
    let sekundaUser;
    sekunda < 10 ? sekundaUser = '0' + myDate.getSeconds(): sekundaUser =  sekunda;
    let rusDate = ['Дата:', myDate.getDate(), months[myDate.getMonth()], myDate.getFullYear(),'— это ', days[myDate.getDay()]];
    let rusTime = ['Время', myDate.getHours(), minutaUser, sekundaUser];
    let rusDateStr = rusDate.join(' ');
    let rusTimeStr = rusTime.join(':');
    console.log(rusDateStr);
    console.log(rusTimeStr);
}
rusDateTime(myDate);

