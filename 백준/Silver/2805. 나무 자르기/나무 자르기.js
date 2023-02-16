let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let tree = Number(input[0].split(" ")[0])
let treeLength = Number(input[0].split(" ")[1])
let treeArr = input[1].split(" ").map(Number)

let start = 0
let end = treeArr.reduce((a, b) => Math.max(a, b))

let result = 0
while (start <= end) {
  let mid = parseInt((start + end) / 2)
  let total = 0
  for(x of treeArr) {
    if(x > mid) total += x - mid
  }
  if(total < treeLength) end = mid - 1
  else {
    result = mid
    start = mid + 1
  }
}
console.log(result)