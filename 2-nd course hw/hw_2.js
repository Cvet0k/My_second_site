// 1
let a = 10;
alert(a);
a = 20;
alert(20);

//2
let firstIphonDate = Number(2007);
alert(`Год выпуска первого iPhone - ${firstIphonDate}`);

//3

let nameJS = String('Брендан Эйх');
alert(`Имя создателя языка JavaScript - ${nameJS}`);

// 4
let k = Number(10);
let h = Number(2);
let summ = k + h;
let subtr = k - h;
let mult = k * h;
let divis = k / h;
alert(`${k} + ${h} = ${summ} 
${k} - ${h} = ${subtr}
${k} * ${h} = ${mult}
${k} / ${h} = ${divis}`);

//5
let v = Number(2);
let result = v ** 5;
alert(result);

//6
let aa = Number(9);
let b = Number(2);
alert(aa % b);

//7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//8
let age = Number(prompt('Сколько вам лет'));
alert(age);

//9
const user = {
    name: String('Elizaveta'),
    age: Number(32),
    isAdmin: Boolean(true)
}
user["city Of Residence"] = true;
user.age = 23;
delete user["city Of Residence"];
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

//10
let imya = prompt("Как вас зовут?");
alert(`Привет, ${imya}!`)


