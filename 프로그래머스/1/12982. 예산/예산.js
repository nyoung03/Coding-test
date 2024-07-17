function solution(d, budget) {
    let sortArr = d.sort((a,b) => a - b)
    let count = 0
    
    for (let i = 0; i < d.length; i++) {
        budget -= sortArr[i]        
        if (budget >= 0) {
            count += 1
            continue;
        }
        break;
    }
    return count;
}