function solution(start_num, end_num) {  
    
    return Array(start_num - end_num + 1).fill(start_num).map((i, idx) => i - idx);
}