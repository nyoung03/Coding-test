function solution(array) {
    let temp = 0
    let index = 0
    
    for(let i = 0; i < array.length; i++) {
        if(temp <= array[i]) {
            temp = array[i]
        }
    }
    
    for(let i = 0; i < array.length; i++) {
        if(temp === array[i]) {
            index = i
        }
    }
    
   
    return [temp, index];
}