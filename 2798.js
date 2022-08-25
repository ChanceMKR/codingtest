const fs = require('fs');
let input = fs.readFileSync('./2798.txt').toString();
let arr = input.split("\n")
let arr1 = arr[0].split(" ")
let card = arr[1].split(" ")

let n = arr1[0]
let m = arr1[1]

let sum
for(let i=0;i<n-2;i++){
    for(let j=i+1;j<n-1;j++){
        for(let k=i+2;k<n;k++)
            sum = card[i] + card[j] + card(k)
            if(sum>=m){
                
            }
    }
}

console.log(n);