function solution(n, control) {
    var answer = n;
    
    for(let i = 0; i < control.length; i++) {
        switch(control[i].toLowerCase()) {
            case 'w':
            answer += 1
            break;
            case 's':
            answer -= 1
            break;    
            case 'd':
            answer += 10
            break;    
            case 'a':
            answer -= 10
            break;
        }
    }
  
    return answer;
}