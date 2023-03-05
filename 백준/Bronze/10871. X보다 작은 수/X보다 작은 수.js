let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = input[0].split(' ').map(Number)[0]
const X = input[0].split(' ').map(Number)[1]
const arr = input[1].split(' ').map(Number)

let result = []

arr.filter(i => i < X && result.push(i))

console.log(result.join(" "))