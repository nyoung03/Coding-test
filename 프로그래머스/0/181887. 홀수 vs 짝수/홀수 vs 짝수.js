function solution(num_list) {
    let even = (num_list.filter((i, idx) => (idx + 1) % 2 === 0).reduce((a, b) => a + b))
    let odd = (num_list.filter((i, idx) => (idx + 1) % 2 === 1).reduce((a, b) => a + b))
    
    return Math.max(odd, even);
}