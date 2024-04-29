const firstName = 'Maxim';
const age = 29;

const output = `Hello my name is ${firstName} and my age is ${age}`;

console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.charAt(2)); // какой символ находится на этом индексе
console.log(firstName.indexOf('a')); // проверка на какой позициинаходится символ и выводит его индекс, если такого нет возвращает -1
console.log(firstName.toLowerCase().startsWith('max'));
console.log(firstName.toLowerCase().endsWith('im'));
console.log(firstName.repeat(2));

const password = '    my super pass';
console.log(password.trim()); // уберает все пробелы в начале
