function solution(s1, s2) {
    let answer = s1.filter(i => s2.includes(i))
   
    return answer.length;
}