const fs = require('fs');
let input = fs.readFileSync('./2588.txt').toString();
let arr = input.split("\n")

let num1 = arr[0];
let num2 = arr[1];
let num2_1 = num2 % 10
let num2_2 = (num2 % 100 - num2_1) / 10
let num2_3 = (num2 - num2_1 - num2_2*10) / 100

let result1 = num2_1*num1
let result2 = num2_2*num1
let result3 = num2_3*num1
let result = result1 + result2*10 + result3*100

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result)