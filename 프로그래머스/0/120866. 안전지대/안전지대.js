function solution(board) {
    var answer = 0;
    let bombPositionArr = [];
    
    // 폭탄 위치 구하기
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                bombPositionArr.push([i, j]);
            }
        }
    }
    
    // 폭탄 범위 처리
    for (let i = 0; i < bombPositionArr.length; i++) {
        let bombPosition = bombPositionArr[i];
        let startX = Math.max(0, bombPosition[0] - 1);
        let endX = Math.min(board.length - 1, bombPosition[0] + 1);
        let startY = Math.max(0, bombPosition[1] - 1);
        let endY = Math.min(board[bombPosition[0]].length - 1, bombPosition[1] + 1);
        
        for (let j = startX; j <= endX; j++) {
            for (let k = startY; k <= endY; k++) {
                board[j][k] = 1;
            }
        }
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== 1) {
                answer++;
            }
        }
    }
    
    return answer;
}