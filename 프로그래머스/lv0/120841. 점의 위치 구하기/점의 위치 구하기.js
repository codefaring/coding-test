function solution(dot) {
    let x = dot[0];
    let y = dot[1];
    
    if(0 < x && 0 < y) {
        return 1;
    } else if(x < 0 && 0 < y) {
        return 2;
    } else if(x < 0 && y < 0) {
        return 3;
    } else if(0 < x && y < 0) {
        return 4;
    }
}