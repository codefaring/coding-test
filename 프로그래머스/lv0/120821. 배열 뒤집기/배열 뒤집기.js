function solution(num_list) {
    let resetArray = [];
    while(num_list.length !== 0) {
        resetArray.push(num_list.pop());
    }
    return resetArray;
}