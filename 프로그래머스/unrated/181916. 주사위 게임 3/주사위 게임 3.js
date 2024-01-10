function aa(same, i, k) {
    if(same) {
        return (i * k)
    } 
}
    

function solution(a, b, c, d) {
    const numArr = [a, b, c, d].sort((a, b) => b - a)
    // 4개가 모두 같을 경우     
    if(a === b && a === c && a === d && b === c && b === d && c === d) {
        return (1111 * a)
    } 
    
    // 3개가 같을 경우
    // if((numArr[0] === numArr[1] && numArr[0] === numArr[2]) || 
    //    (numArr[1] === numArr[2] && numArr[1] === numArr[3])) {
    //     let temp = 10 * numArr[0] + numArr[3];
    //     return temp * temp;
    // }
    
    if((numArr[0] === numArr[1] && numArr[0] === numArr[2]) || 
       (numArr[1] === numArr[2] && numArr[1] === numArr[3])) {
        
        if(numArr[0] === numArr[1] && numArr[0] === numArr[2]) {
            let temp = 10 * numArr[0] + numArr[3];
            return temp * temp;
        }
        
          if(numArr[1] === numArr[2] && numArr[1] === numArr[3]) {
            let temp = 10 * numArr[3]+ numArr[0];
            return temp * temp;
        }
        
    }
    
    // 2개가 같을 경우
    if(numArr.slice(0, 2)[0] === numArr.slice(0, 2)[1] && numArr.slice(2, 4)[0] === numArr.slice(2, 4)[1]) {
        return ((numArr.slice(0, 2)[0] + numArr.slice(2, 4)[0]) * 
                Math.abs(numArr.slice(0, 2)[0] - numArr.slice(2, 4)[0]))
    }
    
    // 모두 다를 때
    if(a !== b && a !== c && a !== d && b !== c && b !== d && c !== d) {
        return numArr[3]
    }
    
    
    //같은 수가 1개일 때
    const arr = [aa(numArr[0] === numArr[1] ,numArr[2], numArr[3]), 
                 aa(numArr[1] === numArr[2] ,numArr[0], numArr[3]), 
                 aa(numArr[2] === numArr[3] ,numArr[0], numArr[1])]
    
    let result;
    arr.map(i => {if(i !== undefined) {result = i}})
    
    return (result)


}