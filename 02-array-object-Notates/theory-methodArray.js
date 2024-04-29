const names = ['Vlad', 'Elena', 'Igor', 'Olga'];

names.push('Alena'); //добавляет элемент в конец массива
console.log('Names: ', names);

names.unshift('Alena'); // добавляет элемент в начала массива, при этом меняет индексы всех элементов массива - не рекомендуется использовать

const name1 = names.shift(); // удаляет первый элемент массива, при этом возвращает этот элемент (можно сохранить в переменной)
const name2 = names.pop(); // удаляет последний элемент массива, при этом возвращает этот элемент (можно сохранить в переменной)

console.log(names.reverse()); // делает реверс всего массива, однако меняет оригинальный массив
const reversed = names.toReversed(); // делает реверс всего массива, но меняет оригинальный массив --- НОВЫЙ МЕТОД
console.log(reversed);

const letters = ['b', 'a', 'e', 'd'];
console.log(
	letters.sort(function (a, b) {
		return a.charCodeAt(0) - b.charCodeAt(0);
	})
); // сортирует массив по Юникоду, может принимать в себя функцию которая указывает на параметры сортировки, однако меняет оригинальный массив

console.log(
	letters.toSorted(function (a, b) {
		return a.charCodeAt(0) - b.charCodeAt(0);
	})
); // сортирует массив по Юникоду, может принимать в себя функцию которая указывает на параметры сортировки, но меняет оригинальный массив --- НОВЫЙ МЕТОД

console.log(names.splice(2, 1)); // // удаляет элемент(ы) массива, (от назначеного индекса, колличество элементов) при этом однако меняет оригинальный массив
console.log(names.toSpliced(2, 1)); // // удаляет элемент(ы) массива, (от назначеного индекса, колличество элементов) но не меняет оригинальный массив

const greateWoman = 'Elena';
const index = names.indexOf(greateWoman); // проверяет наличие элемента в массиве и возвращает его индекс, если элемента нет, возвращает -1
console.log(index);
names[index] = 'Elena Velikaya'; // изменяет элемент в массиве по индексу, меняет оригинальный массив
console.log(names[index]);

const newNames = names.copyWithin(index); // изменяет элемент в массиве по индексу, не меняет оригинальный массив
console.log(names);
console.log(newNames);

const capitalNames = names.map(function (name, index) {
	// const newName = name + '!';
	// return newName;

	// return name.toLocaleLowerCase();

	if (index === 1) {
		return 'Elena Velikaya';
	}
	return name;
}); //перебирает каждый элемент массива при этом изменяет его согласно заданой функции (аналог цикла), возвращает новый массив с измененными данными
console.log(capitalNames);

console.log(names.includes('Igor')); // проверяет наличие элемента в массиве и возвращает true/false
console.log(names.indexOf('Igor') !== -1); // проверяет наличие элемента в массиве и возвращает true/false

const people = [
	{ name: 'Vlad', budget: 4200 },
	{ name: 'Igor', budget: 15110 },
	{ name: 'Elena', budget: 300 },
	{ name: 'Olga', budget: 7520 },
];

//----------------------------------------------------------------------------------

// console.log(people.indexOf({ budget: 7520 })); // indexOf не сработает

// let findedPerson;
// for (let person of people) {
// 	if (person.budget === 7520) {
// 		findedPerson = person;
// 	}
// }
// console.log(findedPerson); // работает но не нужно так делать

//----------------------------------------------------------------------------------

// const findedPerson = people.find(function (person) {
// 	if (person.budget === 7520) {
// 		return true;
// 	}
// });
// console.log(findedPerson);

//----------------------------------------------------------------------------------

// const finded = people.find((p) => p.budget === 7520);
// console.log(finded);

//----------------------------------------------------------------------------------

// const finded = people.findIndex((p) => p.budget === 7520);
// console.log(finded);

// const filtered = people.filter(function (p) {
// 	return p.budget > 5000;
// });

// console.log(filtered); // всегда возвращает новый массив, при этом фильтрует его согласно заданых параметров функции
// filtered.forEach(function(p) {
// 	sumBudget = sumBudget + p.budget
// }) // перебирает массив

//----------------------------------------------------------------------------------

const sumBudget = people
	.filter((p) => p.budget > 5000)
	.map((p) => p.budget)
	.reduce((acc, p) => acc + p);
console.log(sumBudget); // Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

//----------------------------------------------------------------------------------

const string = 'Hello humans';
const reversedd = string.split('').toReversed().join(''); // split() - превращает строку в массив, Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку
console.log(reversedd);
