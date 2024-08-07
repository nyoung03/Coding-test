function solution(my_string) {
    let arr = my_string.split('');
    let answer = 0
    let regex = /^[0-9]*$/
    
    for(let i = 0; i < my_string.length; i++) {
        if(regex.test(arr[i])) {
            answer += Number(arr[i])
        }
    }
    
    return answer;
}