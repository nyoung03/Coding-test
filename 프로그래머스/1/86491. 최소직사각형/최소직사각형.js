function solution(sizes) {
    let width = 0;
    let height = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        width = Math.max(width, Math.max(sizes[i][0], sizes[i][1]));
        height = Math.max(height, Math.min(sizes[i][0], sizes[i][1]));
    }
    return width * height;
    
    
//     let x = []
//     let y = []
    
//     for(let i = 0; i < sizes.length; i++) {
//         if(sizes[i][0] >= sizes[i][1]) {
//             x.push(sizes[i][0])
//             y.push(sizes[i][1])
//         } else {
//             x.push(sizes[i][1])
//             y.push(sizes[i][0])
//         }
//     }
    
//     return Math.max(...x) * Math.max(...y);
}