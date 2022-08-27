const fs = require('fs')
const input = fs.readFileSync('./2798.txt').toString().split("\n")

const arr = input[0].split(" ")
const card = input[1].split(" ")

const n = parseInt(arr[0])
const m = parseInt(arr[1])

let sum = 0
let result = 0

for(let i=0;i<n-2;i++){
    for(let j=i+1;j<n-1;j++){
        for(let k=j+1;k<n;k++){
            sum = parseInt(card[i]) + parseInt(card[j]) + parseInt(card[k])
            if(sum>m){
                continue;
            }else{
                if(sum>result) result = sum;                  
            }
        }
    }
}
//break 조건
console.log(result)