function solution(s1, s2) {
    let answer = 0
    s1.map(i => s2.includes(i) ? answer += 1 : answer += 0);
    
    return answer;
}