function solution(n) {
    
    return Array(n).fill().map((v, i) => i + 1).filter(i => i % 2 === 1);
}