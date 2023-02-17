function solution(rsp) {
    return rsp.split('').map((num) => num === '2' ? '0' : num === '0' ? '5' : '2').join('');
}