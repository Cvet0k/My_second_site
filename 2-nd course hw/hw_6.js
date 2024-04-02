// Задача 1 task

const massiv1 = [ 1, 5, 4, 10, 0, 3];
for (let index = 0; index < massiv1.length; index++) {
     console.log(massiv1[index]);
     if (massiv1[index] === 10) break;
}

// Задача 2 task

let userIndex = -1
for (let index = 0; index < massiv1.length; index++) {
    if (massiv1[index] === 4) {
        userIndex = index;
        break ;
    } 
}
console.log(userIndex);
