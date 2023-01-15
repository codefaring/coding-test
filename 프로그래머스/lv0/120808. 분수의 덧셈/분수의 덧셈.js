function solution(numer1, denom1, numer2, denom2) {
    let upNum = numer1*denom2 + numer2*denom1;
    let downNum = denom1 * denom2;
    let minNum = 1;
    for(i = 1; i <= upNum; i++) {
        if(upNum % i === 0 && downNum % i === 0) {
            minNum = i;
        }
    }
    return [upNum/minNum, downNum/minNum];
}