function solution(my_string, letter) {
    
    return my_string.split('').map(i => i.replace(letter, '')).join('');
}