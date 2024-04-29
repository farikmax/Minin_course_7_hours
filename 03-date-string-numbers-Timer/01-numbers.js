// const num = 47; // integer
// const float = 42.42; // float
// const pow = 10e3; // 10 ** 3
// const big = 1000000; // можно разделять _ - 1_000_000

// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Math.pow(2, 53) - 1); // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324
// console.log(Number.POSITIVE_INFINITY); // Infinity
// console.log(Number.NEGATIVE_INFINITY); // -Infinity

// const weird = 23 / undefined; // NaN
// console.log(Number.isNaN(weird));

const strInt = '42';
const strFloat = '42.42';

console.log(Number(strInt));
console.log(Number(strFloat));
console.log(Number.parseInt(strFloat));
console.log(parseInt(strFloat));
console.log(parseFloat(strFloat));

console.log(+strInt, +strFloat);

console.log(+(0.1 + 0.2).toFixed(1));

//BigInt

console.log(BigInt(Number.MAX_SAFE_INTEGER) + 87798798n);

//Math

console.log(Math.E);
console.log(Math.PI);

console.log(Math.sqrt(25));
console.log(Math.pow(2, 3));
console.log(Math.abs(-42));
console.log(Math.max(2, 152, 362, 335, 24));
console.log(Math.min(2, 152, 362, 335, 24));
console.log(Math.floor(4.9)); // округляет до целого числа в меньшую сторону = 4
console.log(Math.floor(4.1)); // округляет до целого числа в большую сторону = 5
console.log(Math.round(4.1)); // округляет до ближайшего целого значения
console.log(Math.trunc(4.9)); // возвращает целое числа = 4
console.log(Math.random(4.9)); // возвращает целое рандомное число от 0 до 1

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const num1 = getRandomNumber(10, 100);
console.log(num1);
