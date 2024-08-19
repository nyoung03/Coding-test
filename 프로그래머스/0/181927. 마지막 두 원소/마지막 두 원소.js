function solution(num_list) {
    var answer = [];
    let lastNum = num_list[num_list.length - 1]
    let secondNum = num_list[num_list.length - 2]
    
    if(lastNum > secondNum) {
        num_list.push(lastNum - secondNum)
    } else {
        num_list.push(lastNum * 2)
    }
    
    return num_list;
}