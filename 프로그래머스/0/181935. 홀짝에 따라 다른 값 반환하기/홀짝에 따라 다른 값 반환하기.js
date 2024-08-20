function solution(n) {
    
    if(n === 1) {
        return 1
    }

    
    let nArr = Array(n).fill(n).map((i, idx) => idx + 1)
    let oddArr = nArr.filter(i => i % 2 === 1).reduce((a, b) => a + b)
    let evenArr = nArr.filter(i => i % 2 === 0).map(i => i ** 2).reduce((a, b) => a + b)
    

    return n % 2 === 1 ? oddArr : evenArr;
}