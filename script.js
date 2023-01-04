//Task one

let string = prompt("String One");
let stringOne = prompt("String Two");
let stringTwo = prompt("String Three");

console.log(string.concat(",", stringOne, ",", stringTwo));

//Task two

let numbers = 123456;
let digits = numbers.toString().split("");
let clearDigits = digits.map(Number);
console.log(clearDigits);
