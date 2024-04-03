// Задача 1 task

const massiv1 = [1, 5, 4, 10, 0, 3];
for (let index = 0; index < massiv1.length; index++) {
    console.log(massiv1[index]);
    if (massiv1[index] === 10) break;
}

// Задача 2 task

let userIndex = -1
for (let index = 0; index < massiv1.length; index++) {
    if (massiv1[index] === 4) {
        userIndex = index;
        break;
    }
}
console.log(userIndex);

// Задача 3 task

const massiv2 = [1, 3, 5, 10, 20];

let joinedMassiv2 = massiv2.join(' ');
console.log(joinedMassiv2);

// Задача 4 task

const massiv3 = [];
for (let index = 0; index < 3; index++) {
    const numMassiv1 = []
    for (let i = 0; i < 3; i++) {
        numMassiv1.push(1);
    }
    massiv3.push(numMassiv1);
}
console.log(massiv3);


// Задача 5 task

const massiv5 = [1, 1, 1];
for (let index = 0; index < 3; index++) {
    massiv5.push(2);
}
console.log(massiv5);


// Задача 6-1 task

const massiv6 = [9, 8, 7, 'a', 6, 5];
massiv6.sort().pop();
console.log(massiv6);

// Задача 6-2 task

const massiv4 = [9, 8, 7, 'a', 6, 5];
massiv4.sort();
const filteredMassiv4 = massiv4.filter(massiv4 => massiv4 !== 'a')
console.log(filteredMassiv4);

// Задача 7 task

const massiv7 = [9, 8, 7, 6, 5];
numUser = Number(prompt ('Угадай число из массива'));
let foundNum = massiv7.includes(numUser);
if (foundNum) {
    alert('Угадал')
    
} else {alert('Не угадал');   
}

// Задача 8 task

let strong1 = 'abcdef' ;
const transStrong1 = strong1.split('').reverse().join('');
console.log(transStrong1);

// Задача 9 task

const massiv9 = [[1, 2, 3],[4, 5, 6]];
let oneMassiv9 = [...massiv9[0], ...massiv9[1]];
console.log(oneMassiv9);

// Задача 10 task

const massiv10 = [1, 2, 5, 3, 8, 7, 6];
for (let index = 0; index < massiv10.length; index++) {
   if (index < massiv10.length - 1  ) {
    console.log (massiv10[index] + massiv10[index + 1]); 
   } else {console.log(massiv10[index])
   }; 
}

// Задача 11 task
const massiv11 = [1, 2, 5, 3, 8, 7, 6];
const sqrMassiv = massiv11.map(massiv11 => massiv11 ** 2);
console.log (sqrMassiv);

// Задача 12 task
const massiv12 = ['Каждый', 'Охотник', 'Желает', 'Знать', 'Где', 'Сидит', 'Фазан'];
const lineMassiv = massiv12.map(massiv12 => massiv12.length);
console.log (lineMassiv);

// Задача 13 task 

const massiv13 = [-7, 0, -8, 3, 5, -2, 6];
const minusMassiv = massiv13.filter(massiv13 =>  massiv13 < 0);
console.log (minusMassiv);