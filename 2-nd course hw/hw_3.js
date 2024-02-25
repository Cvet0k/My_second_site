

// Задача 1

let password = String('FreeWiFi')
let userPassword = String(prompt("Введите пароль"));
if (password === userPassword) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// Задача 2

let c = Number(prompt('Введи чило в промежутке от 0 до 10'));
alert(c > 0 && c < 10 ? 'Верно' : 'Неверно');

// Задача 3

let d = Number(prompt('Введи любое чило'));
let e = Number(prompt('Введи любое чило'));
if (d > 100 || e > 100) {
    alert('Верно');
} else { alert('Неверно'); }

// Задача 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
a = Number(a);
b = Number(b);
alert(a + b);

// Задача 5

let monthNuber = Number(prompt('Введи номер месяца, и я скажу какое время года'));

if (monthNuber === 1 || monthNuber === 2 || monthNuber === 12) {
    alert('За окном зима, одевайся теплей');
} else if (monthNuber === 3 || monthNuber === 4 || monthNuber === 5) {
    alert('За окном весна, слышишь как поют птицы и звенит капель');
} else if (monthNuber === 6 || monthNuber === 7 || monthNuber === 8) {
    alert('За окном лето, пора ехать на пляж');
} else if (monthNuber === 9 || monthNuber === 10 || monthNuber === 11) {
    alert('За окном осень, не забудь зонтик и теплый шарф');
} else {
    alert('В году 12 месяцев, попробуй еще раз');
}

// Задача 5-2

let monthNuber2 = Number(prompt('Введи номер месяца, и я скажу какое время года'));
switch (monthNuber2) {
    case 1:
    case 2:
    case 12: alert('За окном зима, одевайся теплей');
        break;

    case 3:
    case 4:
    case 5: alert('За окном весна, слышишь как поют птицы и звенит капель');
        break;
    case 6:
    case 7:
    case 8: alert('За окном лето, пора ехать на пляж');
        break;
    case 9:
    case 10:
    case 11: alert('За окном осень, не забудь зонтик и теплый шарф');
        break;

    default: alert('В году 12 месяцев, попробуй еще раз');
        break;
}

// Задача 6 (выполнено ранее в ветке hw_2)

// Задача 7 

let chislo = Number(prompt('Пожалуйста, введите любое число'));
chislo.toString() === 'NaN' ? alert('Это не число, попробуй еще раз') : alert(chislo % 2 === 1 ? 'Число нечетное' : 'Число четное');

// Задача 8 и 9

let clientOS = Boolean(confirm('На вашем телефоне операционная система на базе Android?'));
let clientDeviceYear = Boolean(confirm('Ваш телефон изготовлен в  2015 году или позднее ?'));
if (clientOS === true && clientDeviceYear === true) {

alert('Установите версию приложения для Android по ссылке');

} else if (clientOS === true && clientDeviceYear === false) {
    alert('Установите облегченную версию приложения для Android по ссылке');
} else if (clientOS === false && clientDeviceYear === true) {
    alert('Установите версию приложения для iOS по ссылке');
} else {
    alert('Установите облегченную версию приложения для IOS по ссылке');
}



