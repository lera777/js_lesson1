/------- Переменные. Задачи (var) -------/
let price;
const MAX_VALUE = 100;
const USER_NAME = 'Arnold';
let userInfo;

console.log(test);
var test = 'string';

var y = 'string';
var y = 'string № 2';
console.log(y);

/------- Строки. Задачи -------/
let string = 'some test string';
let value;
let a = 20;
let b = 16;
let min_value;
let max_value;
let x;

let firstLetter = string[0];
let lastLetter = string[string.length-1];
console.log(firstLetter, lastLetter);

firstLetter = firstLetter.toUpperCase();
lastLetter = lastLetter.toUpperCase();
console.log(firstLetter, lastLetter);
console.log(firstLetter + string.slice(1, string.length-1) + lastLetter);

value = string.indexOf('string');
console.log(value);

value = string.indexOf(' ');
value = string.indexOf(' ', value + 1);
console.log(value);

value = string.substr(4, 4);
console.log(value);

value = string.substring(4, 9);
console.log(value);

value = string.slice(0, -6);
console.log(value);

value = a.toString() + b.toString();
console.log(value);

/------- Числа. Задачи -------/
value = Math.PI.toFixed(2);
console.log(value);

min_value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
max_value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log('min value:', min_value,';', 'max value:', max_value);

value = Math.random().toFixed(2);
console.log(value);

x = 17;
value = Math.round(Math.random() * x);
console.log(`random number from 0 to ${x}, rounded to an integer: ` + value);

console.log((0.6 * 10 + 0.7 * 10) / 10);

string = '100$';
console.log(parseInt(string));

/------- Объект. Задачи -------/
let store = {
    product: 'iphone'
};
console.log(store);

store.price = 1000;
store.currency = 'dollar';
console.log(store);

store.details = {
    model: '6s',
    color: 'purple'
};
console.log(store);
