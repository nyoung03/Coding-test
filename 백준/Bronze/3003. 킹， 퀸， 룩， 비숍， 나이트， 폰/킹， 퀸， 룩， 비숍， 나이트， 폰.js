let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const haveChess = input[0].split(' ').map(Number)

const chess = [1,1,2,2,2,8]
let need = []

for(let a = 0; a < haveChess.length; a++) {
    need.push(chess[a] - haveChess[a])
}

console.log(need.join(' '));