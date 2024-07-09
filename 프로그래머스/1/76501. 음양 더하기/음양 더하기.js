function solution(absolutes, signs) {
    let result = 0
    
    for(let i = 0; i <= absolutes.length -1; i++) {
        if(signs[i]) {
            result = result + absolutes[i]
        } else {
            result = result - absolutes[i]
        }
    }
    
    return result;
}