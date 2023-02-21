function solution(cipher, code) {
    let match = cipher.split('');
    let find = [];
    for(let i = code - 1; i <= match.length; i += code) {
        find.push(match[i]);
    }
    return find.join('');
}