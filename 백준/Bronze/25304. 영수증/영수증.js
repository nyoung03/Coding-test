let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const total = Number(input[0])
let sum = 0

for(let i = 2; i <= Number(input[1]) + 1; i++) {
    let arr = input[i].split(" ").map(Number)
    sum += arr[0] * arr[1]
}

console.log(total === sum ? 'Yes' : 'No')