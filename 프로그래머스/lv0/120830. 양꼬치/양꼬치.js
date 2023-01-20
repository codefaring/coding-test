function solution(n, k) {
    let freedrink = Math.floor(n / 10);
    return n * 12000 + (k - freedrink) * 2000;
}