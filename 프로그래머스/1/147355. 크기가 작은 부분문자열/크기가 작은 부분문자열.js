function solution(t, p) {
    var answer = 0;
    let len = p.length
    
    
    for(let i = 0; i < t.length; i++) {
        if(t.slice(i, len + i).length === len) {
            if(t.slice(i, len + i) <= p) {
                ++answer
            }
        }
    }
   
    return answer;
}