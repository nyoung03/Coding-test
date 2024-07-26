function solution(lines) {
    var answer = 0;
    let arr = [...Array(201).fill(0)]
    
    for(let i = 0; i < lines.length; i++) {
        let leng = (lines[i])
        for(let j = leng[0]; j <leng[1]; j++) {
            arr[j + 100] += 1
        }
    }
    
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] >= 2) {
            answer += 1
        }
    }
    
    return answer;
}