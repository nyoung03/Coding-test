function solution(a, b) {
   
    return +(String(a) + String(b) >= String(b) + String(a) ? String(a) + String(b) : String(b) + String(a))
}