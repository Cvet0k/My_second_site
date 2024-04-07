// Задача 1 task

let line = 'js';
const lineUp = line.toUpperCase();
console.log(lineUp);

// Задача 2 task

const lineMassiv2 = ['Солнце светит', 'Туча закрыла солнце', 'Солнечный свет', 'Белый лед', 'Солнце и лед' ];
let line2 = 'СолНце';
const NewLineMassiv2 = lineMassiv2.filter(lines => lines.toLowerCase().startsWith(line2.toLowerCase()) ) ;
console.log(NewLineMassiv2);

// Задача 3 task

let number = 32.5884;
console.log(Math.floor(number), Math.ceil(number), Math.round(number) );
