function solution(hp) {
    var answer = 0;
    let antPower = [5, 3, 1]

    for(let i = 0; i < antPower.length; i++) {
        answer += Math.floor(hp / antPower[i])
        hp -= (antPower[i] * Math.floor(hp / antPower[i]))
    }
  
    return answer;
}