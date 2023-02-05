function solution(array, n) {
    let count = 0;
    array.map((number) => {
        if(number === n) {
            count++;
        }
    })
    return count;
}
