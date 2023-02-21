let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0])
const V = Number(input[2])

const arr = input[1].split(' ').map(Number)

let count = 0

for(let i = 0; i < N; i++) {
  if(arr[i] === V) {
    count += 1
  }  
}

console.log(count)