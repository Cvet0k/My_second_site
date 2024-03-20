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
