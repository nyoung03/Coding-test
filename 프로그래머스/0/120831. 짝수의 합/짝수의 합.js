function solution(n) {
    var answer = 0;
    let sum = Array(n).fill().map((v,i) => {if((i + 1) % 2 === 0) answer += (i + 1)})
    
    return answer;
}