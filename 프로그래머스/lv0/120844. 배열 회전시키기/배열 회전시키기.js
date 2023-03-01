function solution(numbers, direction) {
    let move = 0;
    if(direction === 'right') {
        move = numbers.pop();
        numbers.unshift(move);
        return numbers;
    } else {
        move = numbers.shift();
        numbers.push(move);
        return numbers
    }
}