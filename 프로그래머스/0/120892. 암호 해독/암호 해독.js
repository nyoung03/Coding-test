function solution(cipher, code) {

    return [...cipher].filter((i, idx) => (idx + 1) % code === 0).join('');
}