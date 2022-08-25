let fs = require('fs');
let input = fs.readFileSync('./1001.txt').toString()
let arr = input.split(" ")
let result = arr[0]-arr[1]

console.log(result)