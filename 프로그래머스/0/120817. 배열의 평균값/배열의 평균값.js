function solution(numbers) {
    var answer = 0;
    let sum = numbers.map(i => answer += i)
    
    return answer / sum.length;
}