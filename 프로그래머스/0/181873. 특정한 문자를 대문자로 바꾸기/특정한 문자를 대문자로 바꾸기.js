function solution(my_string, alp) {  
  
    return [...my_string].map(i => i === alp ? i.toUpperCase() : i).join('');
}