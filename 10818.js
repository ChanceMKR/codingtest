const fs = require('fs')
const input = fs.readFileSync("./10818.txt").toString().split("\n")
const n = input[0]
const arr = input[1].split(" ")
for(let i=0;i<n;i++){
    arr[i] = parseInt(arr[i])
}
let min = Math.min.apply(null, arr)
let max = Math.max.apply(null, arr)

console.log(min, max)