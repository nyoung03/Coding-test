let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]) / 4
const text = 'long '

console.log(text.repeat(a) + 'int')