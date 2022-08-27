const fs = require('fs');
const input = fs.readFileSync('./1001.txt').toString().split(" ")
const a = input[0]
const b = input[1]

console.log(a-b)