function solution(s) {
    var answer = [];
    let words = s.toLowerCase().split(' ')
    
    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            if(j % 2 === 0) {
                answer.push(words[i][j].toUpperCase())
            } else {
                answer.push(words[i][j])
            }
        }
        
        if(i !== words.length - 1) {
            answer.push(" ")
        }
         
    }

    return answer.join("");
}