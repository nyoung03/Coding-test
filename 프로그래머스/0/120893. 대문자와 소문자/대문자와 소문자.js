function solution(my_string) {
    let regex = /[a-z]/;
    let answer = ''
    
    for(let i = 0; i < my_string.length; i++) {
        if(regex.test(my_string[i])) {
            answer += my_string[i].toUpperCase()
        } else {
            answer += my_string[i].toLowerCase()
        }
    }
   
    return answer;
}