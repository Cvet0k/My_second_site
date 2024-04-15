// Task 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
function sortPeople(person1, person2) {
    if (person1.age < person2.age) {
        return -1;
    } else {
        return 1;
    }
}
console.log(people.sort(sortPeople));

// Task 2
function isPositive(num) {
    return num > 0;
}

function isMale(person2) {
    return person2.gender === 'male';

}
function filter(arr, func) {
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        if (func(arr[index])) {
            result.push(arr[index]);
        }
    }
    return result;


}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people2, isMale));

// Task 3

let timer3sec = setInterval(() => console.log(new Date()), 3000);
setTimeout(() => { clearInterval(timer3sec); console.log('30 секунд прошло'); }, 30000);

// Task 4

function delayForSecond(callback) {
    setTimeout(callback, 1000);
   
}
delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// Task 5

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`); // тут изменила кавычки они были не верные
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Александр')); // изменила имя так как выше такое же имя 
