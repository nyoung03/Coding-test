function solution(num) {
    let answer = num;
    let count = 0
    
    const even = () => {
        answer = answer / 2
    }
    
    const odd = () => {
        answer = (answer * 3) + 1
    }
    
    if(num === 1) {
        return 0
    }
    
    if(answer !== 1) {
        while(count < 500) {
            if(answer % 2 === 0) {
                even()
            } else {
                odd()
            } 
            
            count++
            
            if(answer === 1) {
                return count
            }
        }
        
        if(count >= 500) {
            return -1
        }
         
    }
    
    return answer
}