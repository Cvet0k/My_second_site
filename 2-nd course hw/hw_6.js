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
