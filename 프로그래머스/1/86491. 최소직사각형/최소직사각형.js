function solution(sizes) {
    let x = []
    let y = []
    
    for(let i = 0; i < sizes.length; i++) {
        if(sizes[i][0] >= sizes[i][1]) {
            x.push(sizes[i][0])
            y.push(sizes[i][1])
        } else {
            x.push(sizes[i][1])
            y.push(sizes[i][0])
        }
    }
    
    return Math.max(...x) * Math.max(...y);
}