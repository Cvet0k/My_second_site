// Задача 1

 let password = String('FreeWiFi')
 let userPassword = String(prompt("Введите пароль"));
 if (password === userPassword) {
   alert('Пароль введен верно');
    } else { alert('Пароль введен неправильно');
}
// Задача 1 (Второй вариант)

let password2 = String('FreeWiFi')
let userPassword2 = String(prompt("Введите пароль"));

alert (password2 === userPassword2 ? 'Пароль введен верно' : 'Пароль введен неправильно');