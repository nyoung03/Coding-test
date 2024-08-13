function solution(num_list, n) {
    
    return num_list.filter((i, idx) => idx % n === 0);
}