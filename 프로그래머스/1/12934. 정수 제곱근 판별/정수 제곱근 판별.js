function solution(n) {
    
    let sqrt = Math.sqrt(n) 
    
    if(sqrt % 1 === 0) {
        return (sqrt + 1) ** 2 
    } 
    return -1
}