// Задача 1

function min(a, b) {
	if (a < b) {
		return a;
} else {
	return b;
	}
}
console.log(min(8, 4));
console.log(min(6, 6));

// Задача 2

function parity(n) {
    n % 2 === 0 ?  console.log ('Число четное') : console.log ('Число нечетное');
}
parity(4);
parity(5);
parity(0);

// Задача 3

let square = (d) => console.log(d ** 2) ;
  
square(5);

let square2 = (d) => { return d ** 2 } ;

let s = square2(4);

console.log(s);


// Задача 4

function age(params) {
    let userAge = Number(prompt('Введи  свой возраст')); 
    if (userAge >= 13 ) {
        alert('Добро пожаловать!'); 
    } else if (userAge > 0 && userAge < 13) {
        alert('Привет, друг!');   
    } else { alert('Вы ввели неправильное значение');
    } 
}
age();

// Задача 5

let c = prompt('Введи число');
let f = prompt('Введи число');

let checkIn = (c, f) => {
  
    if (!Number.isNaN(Number(c)) && !Number.isNaN(Number(f))) {
        return c * f ;  } else {  
            alert('Одно или оба значения не являются числом');   
   } 
}
console.log(checkIn(c, f));
