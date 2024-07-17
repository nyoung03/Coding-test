function solution(d, budget) {
    var answer = budget;
    let sortArr = d.sort((a,b) => a - b)
    let count = 0
    
    for(let i = 0; i < d.length; i++) {
        answer -= sortArr[i]
        
        if(answer >= 0) {
            count += 1
        }
        
        if(answer <= 0) {
            break;
        }
    }
    return count;
}