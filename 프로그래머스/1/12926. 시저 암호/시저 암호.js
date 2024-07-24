function solution(s, n) {
    var arr = s.split("");
    
    for(let i = 0; i < arr.length; i++) {
       arr[i] = arr[i] === ' ' ? arr[i] : shift(arr[i], n)
    }

    return arr.join("");
}

function shift(alpha, num) {
    let isSmall = alpha.charCodeAt() > 90;
    alpha = alpha.charCodeAt() + num;
    
    if((isSmall && alpha > 122) || (!isSmall && alpha > 90)) {
        alpha -= 26
    }
    
    return String.fromCharCode(alpha)
}