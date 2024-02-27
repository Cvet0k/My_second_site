// Задача 1
let i = 1;
while (i < 3) {
    console.log('Привет');
    i++;
}

// Задача 2

i = 1;

do {
    console.log(i);
    i++;
} while (i < 6);

// Задача 3

for (let n = 7; n < 23; n++) {
    console.log(n);
}
// Задача 4

const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}
for (let key in obj) {
    console.log(`${key} —  зарплата ${obj[key]} долларов`);
}

// Задача 5
let m = 1000;
let num = 0;
while (m > 50) {
    m = m / 2;
    num++;
}
alert(`Результат от деления на 2 -  ${m}. Колличество операций - ${num}`);

// Задача 6

for (let date = 2; date < 32; date = date + 7) {
    alert(`Сегодня пятница, ${date}-е число. Необходимо подготовить отчет.`)
}

