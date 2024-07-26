function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    answer = [numer1 * denom2 + numer2 * denom1, denom1 * denom2]
    
    let gcd = (num1, num2) => {
        while(num2 > 0) {
            let r = num1 % num2
            num1 = num2
            num2 = r
        }
        
        console.log(num1)
        return num1
    }
    
    answer = [answer[0] / gcd(answer[0], answer[1]), answer[1] / gcd(answer[0], answer[1])]
    
    
    return answer;
}