function solution(numbers) {
    let sum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9

    for(let i = 0; i <= numbers.length - 1; i++) {
        sum = sum - numbers[i]
    }
    
    return sum
}