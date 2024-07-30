function solution(array, n) {
    var answer = 0;
    
    array.map(i => {if(i === n) answer++})
    
    return answer;
}