let fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

const x = Number(input[0])
const y = Number(input[1])

if(x > 0 && y > 0 ) {
  console.log(1)
}
if(x > 0 && y < 0 ) {
  console.log(4)
}
if(x < 0 && y > 0) {
  console.log(2)
}
if(x < 0 && y < 0 ) {
  console.log(3)
}