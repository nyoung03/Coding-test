function solution(my_string, is_suffix) {
    
    return my_string.split('').reverse().join('').slice(0, is_suffix.length).split('').reverse().join('') === is_suffix ? 1 : 0;
}