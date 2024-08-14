function solution(n, k) {
  
    return Array(n).fill(n).map((i, idx) => idx + 1).filter(i => i % k === 0);
}