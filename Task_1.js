
// Task 1

function simvol2 (string , simvol) {
    let simvolArr2 = string.split('').filter(perem => perem === simvol);
    console.log(simvolArr2.length)
}
simvol2("Hello", "o");
simvol2("Hello", 'l');
simvol2("Hello", 'x');
simvol2("", 'x');

// Task 2-1

function sqrSum(mas) {
    let sum  = 0;
  let sqr = mas.map(num => num * num);
  for (let index = 0; index < sqr.length; index++) {
   sum += sqr[index];
  }
console.log(sum);
}
sqrSum([1, 2, 2]);

// Task 2-2

function sqrSum2 (mas) {
  let sqr2 = mas.map(num => num * num).reduce((total, num) => total + num, 0);
console.log(sqr2);
}
sqrSum2([1, 2, 2]);

// Task 3

function words (arr) {
    const newWord = arr.split(' ').map(ward => ward + ' ' + ward.length);
    console.log(newWord);
}
words("apple ban" );
words("you will win" );

// Task 4 -1 

function mango (object, price ) {
  let userPrise = 0;
  if (object % 3 === 0) {
    userPrise =  price * (object - object/3)
    console.log (userPrise);
    
  } else if (object % 3 !== 0 && object < 3) {
    userPrise = object * price;
    console.log (userPrise);
  } else {
    userPrise = price * (object - ((object - (object % 3)) / 3));
    console.log (userPrise);
  }
}
mango(2, 3); // ==> 6   
mango(3, 3); // ==> 6    
mango(5, 3); // ==> 12   
mango(9, 5); // ==> 30    

// Task 4 - 2

const mango2 = (object, price ) => {
  let pay = Math.floor(object / 3) * (price * 2) + (object % 3) * price;
  console.log(pay);
}

mango2(2, 3); // ==> 6   
mango2(3, 3); // ==> 6    
mango2(5, 3); // ==> 12   
mango2(9, 5); // ==> 30 

// Task 5

function multArr (arr) {
let arrRed = arr.reduce((total, num) => total * num);
console.log(arrRed);
}
multArr([1, 2, 3, 4]);