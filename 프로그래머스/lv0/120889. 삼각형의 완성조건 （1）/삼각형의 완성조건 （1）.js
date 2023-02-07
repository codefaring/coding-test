function solution(sides) {
    sides = sides.sort((a, b) => a-b);
    let sum = sides[0] + sides[1];
    
    return sum > sides[2] ? 1 : 2;
}