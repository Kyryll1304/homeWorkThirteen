//Task one

let string = prompt("String One");
let stringOne = prompt("String Two");
let stringTwo = prompt("String Three");

console.log(string.concat(",", stringOne, ",", stringTwo));

//Task two
let i = 0;
let numbers = 28567;
let digits = numbers.toString().split("");
console.log(digits.join(" "));
