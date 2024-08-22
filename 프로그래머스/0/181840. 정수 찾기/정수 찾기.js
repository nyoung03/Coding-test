function solution(num_list, n) {

    return num_list.filter(i => i === n).length !== 0 ? 1 : 0;
}