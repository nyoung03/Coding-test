function solution(a, b) {
    let strAdd = String(a) + String(b)
    let NumAdd = Number(a) * Number(b) * 2
    
    return Math.max(strAdd, NumAdd);
}