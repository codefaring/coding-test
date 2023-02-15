function solution(my_string) {
    let sum = 0;
    my_string.replace(/[^0-9]/g, '')
             .split('')
             .map((num) => sum += Number(num));
    return sum;
}