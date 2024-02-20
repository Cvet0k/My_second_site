

// Задача 1

 let password = String('FreeWiFi')
 let userPassword = String(prompt("Введите пароль"));
 if (password === userPassword) {
   alert('Пароль введен верно');
    } else { alert('Пароль введен неправильно');
}

// Задача 2

let c = Number(prompt('Введи чило в промежутке от 0 до 10'));
alert( c > 0 && c < 10 ? 'Верно' : 'Неверно');

// Задача 3

let d = Number(prompt('Введи любое чило'));
let e = Number(prompt('Введи любое чило'));
if (d > 100 || e > 100) {
    alert('Верно');
} else {alert('Неверно');}

