function solution(array, height) {
    let answer = 0;
    array.map((anotherHeight) => {
        if(height < anotherHeight) answer++;
    })
    return answer;
}