let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = input[0].split(' ')

const A = a.map(Number)[0]
const B = a.map(Number)[1]
const C = a.map(Number)[2]

console.log(A + B + C)