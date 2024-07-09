function solution(arr) {
    
    if(arr.length === 1) {
        return [-1]
    }
    
    let min = Math.min(...arr)
    
    for(let i = 0; i <= arr.length - 1; i++) {
       
        if(arr[i] === min) {
            arr.splice(i, 1)
        }
    }
    
    return arr
}