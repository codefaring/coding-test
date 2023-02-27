function solution(numbers) {
    let anwser = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j != numbers.length; j++) {
            if(i !== j) {
                anwser.push(numbers[i] * numbers[j]);
            }
        }
    }
    anwser.sort((a, b) => b-a);
    return anwser[0];
}