let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = (input[0].split(' ').map(Number).sort((a,b) => b-a))

if(arr[0] === arr[1] && arr[1] === arr[2]) {
  console.log(10000 + arr[0] * 1000)
} else if (arr[0] !== arr[1] && arr[1] !== arr[2]) {
  console.log(arr[0] * 100)
} else {
  if(arr[0] === arr[1]) {
    console.log(1000 + arr[0] * 100)
  } else if(arr[0] === arr[2]) {
    console.log(1000 + arr[0] * 100)
  } else {
    console.log(1000 + arr[1] * 100)
  }
}