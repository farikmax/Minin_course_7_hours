// Function Declaration

function greet(name) {
	console.log('Hello - ', name);
}

// Function Exspression
const greet2 = function (name) {
	console.log('2 Hello - ', name);
};

setTimeout(function () {
	console.log('Time Out');
}, 1500);

let counter = 0;
const interval = setInterval(function () {
	if (counter === 5) {
		clearInterval(interval);
	} else {
		console.log(++counter);
	}
}, 2000);

//Arrow Function

const arrow = (name) => {
	console.log('2 Hello - ', name);
};

const arrow2 = (name) => console.log('2 Hello - ', name);

// -------------------Default Parameters-------------------

const sum = (a = 40, b = 2) => a + b;
console.log(sum(40));

function sumAll(...numbers) {
	// console.log(numbers);
	// let res = 0;
	// for (let num of numbers) {
	//   res += num
	// }
	// return res
	return numbers.reduce((acc, cur) => (acc = +cur), 0);
}

console.log(sumAll(1, 2, 4, 5, 7));

// Closures - замыкание
function createPerson(name) {
	return function (lastname) {
		console.log(name + ' ' + lastname);
	};
}

const addlastName = createPerson('Maxim');
