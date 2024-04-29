const person = {
	name: 'Maxim',
	age: 38,
	isYoutuber: false,
	languages: ['ru', 'ua', 'pl'],
	adress: {
		city: 'Kremenchuk',
		street: 'Soborna',
	},
	'complex key': 'complex value',
	[1 + 2]: 'computed value',
	['key_' + 21 * 2]: 'complex value',
	greet() {
		console.log('Greet from person');
	},
	arrow: () => {
		console.log('Person Arrow');
	},
	info() {
		console.log('Person name', this.name);
	},
};

// console.log(person);
// person.greet();
// person.arrow();
// person.info();

// console.log(person.adress);
// console.log(person['adress']);

// for (let key in person) {
// 	if (person.hasOwnProperty(key)) {
// 		console.log(person[key]);
// 	}
// }

// const keys = Object.keys(person);
// // console.log(keys);
// keys.forEach((key) => {
// 	console.log(person[key]);
// });

// Object.keys(person).forEach((key) => {
// 	console.log(person[key]);
// });

// const logger = {
// 	keys() {
// 		console.log('Object keys:', Object.keys(this));
// 	},

// 	keyAndValue() {
// 		Object.keys(this).forEach((key) => {
// 			console.log('Key:', key);
// 			console.log('Value:', this[key]);
// 		});
// 	},
// };

// // const bound = logger.keys.bind(person);
// // bound();

// logger.keys.call(person);
// logger.keys.apply(person);

//--------------------------------------------------------------------------------

class Human {
	static isHuman = true;

	humanGreet() {
		console.log('greet from Human');
	}
}

class Person extends Human {
	constructor(name, age) {
		super();
		this.name = name ?? 'Undefined name';
		this.age = age ?? 'Undefined age';
	}

	sayHello() {
		console.log('Hello from ', this.name);
	}
}

const person1 = new Person('Max', 30);
const person2 = new Person('Elena', 27);

person1.sayHello();

//--------------------------------------------------------------------------------
