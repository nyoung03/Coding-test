function solution(dots) {
    let a = dots[0]
    let b = dots[1]
    let c = dots[2]
    let d = dots[3]
    
    if((a[1] - b[1])/(a[0] - b[0]) === (c[1] - d[1])/(c[0] - d[0])) {
       return 1
    } else if((a[1] - c[1])/(a[0] - c[0]) === (b[1] - d[1])/(b[0] - d[0])) {
        return 1
    } else if ((a[1] - d[1])/(a[0] - d[0]) === (c[1] - b[1])/(c[0] - b[0])) {
        return 1
    } else {
        return 0
    }
}